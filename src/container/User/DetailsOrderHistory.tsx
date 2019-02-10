import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getInvoice, createMidtransPayment, trackDelivery } from 'actions'
import { Col, Row, Button, Table } from 'reactstrap'
import { Link } from 'routes'
import _ from 'lodash'
import moment from 'moment'

interface StateProps {
  id: number
  detailsInvoice: any
  trackingDelivery: any
}

interface DispatchProps {
  getInvoice: typeof getInvoice
  createMidtransPayment: typeof createMidtransPayment
  trackDelivery: typeof trackDelivery
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  active: string
  isPaymentNull: boolean
  message: string
  isSmallDevice: boolean
}

class DetailsOrderHistory extends Component<PropsComponent, StateComponent> {
  constructor (props: PropsComponent) {
    super(props)

    this.state = {
      active: '',
      isPaymentNull: false,
      message: '',
      isSmallDevice: false
    }
  }

  componentDidMount () {
    this.props.getInvoice(this.props.id)
    this.props.trackDelivery(this.props.id)
    this.setState({
      active: window.location.pathname,
      isSmallDevice: window.outerWidth < 576
    })
  }

  transactionStatus () {
    const { detailsInvoice } = this.props
    const paymentStatus = detailsInvoice.payment_status
    const paymentDetails = detailsInvoice.payment_details
    switch (paymentStatus) {
      case 0:
        if (paymentDetails !== null) {
          if (paymentDetails.need_action) {
            return {
              isPaymentNull: true,
              action: 'midtrans_success',
              message: 'Continue to Payment'
            }
          } else {
            return {
              isPaymentNull: false,
              action: '',
              message: 'Payment Pending'
            }
          }
        } else {
          return {
            isPaymentNull: true,
            action: 'midtrans_failed',
            message: 'Continue to Payment'
          }
        }
      case 1:
        return {
          isPaymentNull: false,
          action: '',
          message: 'Payment Success'
        }
      case -1:
        return {
          isPaymentNull: false,
          action: '',
          message: 'Payment Cancelled/Exprired'
        }
      default:
        return {
          isPaymentNull: false,
          action: '',
          message: ''
        }
    }
  }

  onButtonClicked = (action: string) => () => {
    const { detailsInvoice } = this.props
    switch (action) {
      case 'midtrans_success':
        window.location.href = detailsInvoice.payment_details.snap_url
        break
      case 'midtrans_failed':
        this.props.createMidtransPayment(detailsInvoice.id)
        break
    }
  }

  renderDataTrips () {
    const { detailsInvoice } = this.props
    if (!detailsInvoice.cart) return ''
    return _.map(detailsInvoice.cart.trips, (data: any, index: number) => {
      let tripDate = data.trip_days.trip_date.substring(0, 10)
      let startDate = moment(tripDate).format('DD MMMM YYYY')
      let endDate = moment(tripDate).add(data.trip_days.duration_in_days - 1, 'd').format('DD MMMM YYYY')
      return (
        <Col xs='12' key={index}>
          <div className='review-item'>
            <Col xs='12'>
              <Row>
                <Col lg='2' xs='4'>
                  <img className='img-fluid' src={data.photo} />
                </Col>
                <Col lg='9' xs='8'>
                  <div className={`d-flex flex-column ${this.state.isSmallDevice ? 'mt-1' : ''}`}>
                    <span className='text-l text-black text-hel-95'>{data.title}</span>
                    <span className='text-m text-black'>{data.address}</span>
                    <span className='text-s text-black'>{startDate} - {endDate}</span>
                  </div>
                </Col>
              </Row>
            </Col>
          </div>
        </Col>
      )
    })
  }

  renderDataProducts () {
    const { detailsInvoice } = this.props
    if (!detailsInvoice.cart) return ''
    return _.map(detailsInvoice.cart.products, (data: any, index: number) => {
      return (
        <Col xs='12' key={index}>
          <div className='review-item'>
            <Col xs='12'>
              <Row>
                <Col lg='2' xs='4'>
                  <img className='img-fluid' src={data.photo} />
                </Col>
                <Col lg='9' xs='8'>
                  <div className={`d-flex flex-column ${this.state.isSmallDevice ? 'mt-1' : ''}`}>
                    <span className='text-l text-black text-hel-95'>{data.name}</span>
                    <span className='text-m text-black'>{data.category}</span>
                    <span className='text-ml text-black'>Rp {data.price}</span>
                  </div>
                </Col>
              </Row>
            </Col>
          </div>
        </Col>
      )
    })
  }

  renderDetailsPayment () {
    const { detailsInvoice } = this.props
    if (!detailsInvoice.payment_details) return ''
    switch (detailsInvoice.payment_details.payment_type) {
      case 'bank_transfer':
      case 'echannel':
        return (
          <>
            <p>Payment Method: {detailsInvoice.payment_details.payment_type}</p>
            <p>Bank: {detailsInvoice.payment_details.billing}</p>
            <p>Account Number: {detailsInvoice.payment_details.billing_number}</p>
          </>
        )
      case 'cstore':
        return (
          <>
            <p>Payment Method: {detailsInvoice.payment_details.payment_type}</p>
            <p>Store: {detailsInvoice.payment_details.billing}</p>
            <p>Payment Code: {detailsInvoice.payment_details.billing_number}</p>
          </>
        )
      default:
        if (detailsInvoice.payment_details.payment_type !== '') {
          return <p>Payment Method: {detailsInvoice.payment_details.payment_type}</p>
        } else {
          return ''
        }
    }
  }

  trackHistory () {
    const { trackingDelivery } = this.props
    return _.map(trackingDelivery.manifest, (data: any, index: number) => {
      let serializeDate = `${moment(data.manifest_date).format('DD-MM-YYYY')} ${data.manifest_time}`
      return (
        <tr key={index}>
          <td>{serializeDate}</td>
          <td>{data.manifest_description} [{data.city_name}]</td>
        </tr>
      )
    })
  }

  renderDataTrackingDelivery () {
    const { trackingDelivery } = this.props
    if (!trackingDelivery.summary) return ''
    return (
      <>
        <Table responsive={true} bordered={true}>
          <thead>
            <tr>
              <th>No. AWB</th>
              <th>Service</th>
              <th>Date of Shipment</th>
              <th>Origin</th>
              <th>Destination</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{trackingDelivery.summary.waybill_number}</td>
              <td>{trackingDelivery.summary.service_code}</td>
              <td>{moment(trackingDelivery.summary.waybill_date).format('DD MMMM YYYY')}</td>
              <td>{trackingDelivery.summary.origin}</td>
              <td>{trackingDelivery.summary.destination}</td>
            </tr>
          </tbody>
        </Table>
        <Table responsive={true} bordered={true}>
          <thead>
            <tr>
              <th>Shipper</th>
              <th>Consignee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{trackingDelivery.details.shippper_name}</td>
              <td>{trackingDelivery.details.receiver_name}</td>
            </tr>
            <tr>
              <td>{trackingDelivery.details.shipper_address1}</td>
              <td>{trackingDelivery.details.receiver_address1}</td>
            </tr>
          </tbody>
        </Table>
        <Table responsive={true} bordered={true}>
          <thead>
            <tr>
              <th colSpan={2}>History</th>
            </tr>
          </thead>
          <tbody>
            {this.trackHistory()}
          </tbody>
        </Table>
      </>
    )
  }

  render () {
    const transactionStatus = this.transactionStatus()
    return (
      <>
        <Row>
          <Col lg='10' xs='12'>
            <h1 className='text-hel-95 text-black text-xl'>Order History</h1>
          </Col>
        </Row>
        <Row>
          <Col lg='3' xs='12'>
            <ul className='list-profile'>
              <Link route='profile'><li className={this.state.active.includes('/profile') ? 'text-yellow' : ''}>Account</li></Link>
              <Link route='orderhistory'><li className={this.state.active.includes('/order_history') ? 'text-yellow' : ''}>Order History</li></Link>
            </ul>
          </Col>
          <Col lg='9' xs='12'>
            <p className='text-hel-95 text-black text-l'>Status: <span className='text-hel-bold text-yellow text-ml'>{transactionStatus.message}</span></p>
            {transactionStatus.isPaymentNull ? <Button color='info' className='mb-4' onMouseDown={this.onButtonClicked(transactionStatus.action)}>Continue to payment</Button> : ''}
            {this.renderDetailsPayment()}
            <Row>
              {this.renderDataTrips()}
            </Row>
            <Row className='mb-4'>
              {this.renderDataProducts()}
            </Row>
            <h4>Tracking Delivery</h4>
            {this.renderDataTrackingDelivery()}
          </Col>
        </Row>
      </>
    )
  }
}

const mapStateToProps = ({ user, rajaongkir }: any) => {
  const { detailsInvoice } = user
  const { trackingDelivery } = rajaongkir

  return { detailsInvoice, trackingDelivery }
}

export default connect(mapStateToProps, { getInvoice, createMidtransPayment, trackDelivery })(DetailsOrderHistory)
