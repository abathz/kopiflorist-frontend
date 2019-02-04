import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getInvoice, createMidtransPayment } from 'actions'
import { Col, Row, Button } from 'reactstrap'
import { Link } from 'routes'
import _ from 'lodash'
import moment from 'moment'

interface StateProps {
  id: number
  detailsInvoice: any
}

interface DispatchProps {
  getInvoice: typeof getInvoice
  createMidtransPayment: typeof createMidtransPayment
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  active: string
  isPaymentNull: boolean
  message: string
}

class DetailsOrderHistory extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.state = {
      active: '',
      isPaymentNull: false,
      message: ''
    }
  }

  componentDidMount () {
    this.props.getInvoice(this.props.id)
    this.setState({
      active: window.location.pathname
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
                <Col xs='2'>
                  <img className='img-fluid' src={data.photo} />
                </Col>
                <Col xs='9'>
                  <div className='d-flex flex-column mt-3'>
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
                <Col xs='2'>
                  <img className='img-fluid' src={data.photo} />
                </Col>
                <Col xs='9'>
                  <div className='d-flex flex-column mt-3'>
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

  render () {
    const transactionStatus = this.transactionStatus()
    return (
      <>
        <Row>
          <Col xs='10'>
            <h1 className='text-hel-95 text-black text-xl'>Order History</h1>
          </Col>
        </Row>
        <Row>
          <Col xs='3'>
            <ul className='list-profile'>
              <Link route='profile'><li className={this.state.active.includes('/profile') ? 'text-yellow' : ''}>Account</li></Link>
              <Link route='orderhistory'><li className={this.state.active.includes('/order_history') ? 'text-yellow' : ''}>Order History</li></Link>
            </ul>
          </Col>
          <Col xs='9'>
            <p className='text-hel-95 text-black text-l'>Status: <span className='text-hel-bold text-yellow text-ml'>{transactionStatus.message}</span></p>
            {transactionStatus.isPaymentNull ? <Button color='info' className='mb-4' onMouseDown={this.onButtonClicked(transactionStatus.action)}>Continue to payment</Button> : ''}
            {this.renderDetailsPayment()}
            <Row>
              {this.renderDataTrips()}
            </Row>
            <Row>
              {this.renderDataProducts()}
            </Row>
          </Col>
        </Row>
      </>
    )
  }
}

const mapStateToProps = ({ user }: any) => {
  const { detailsInvoice } = user

  return { detailsInvoice }
}

export default connect(mapStateToProps, { getInvoice, createMidtransPayment })(DetailsOrderHistory)
