import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getInvoice } from 'actions'
import { Col, Row } from 'reactstrap'
import { Link } from 'routes'
import _ from 'lodash'
import moment from 'moment'

interface StateProps {
  id: number
  detailsInvoice: any
}

interface DispatchProps {
  getInvoice: typeof getInvoice
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  active: string
}

class DetailsOrderHistory extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.state = {
      active: ''
    }
  }

  componentDidMount () {
    this.props.getInvoice(this.props.id)
    this.setState({
      active: window.location.pathname
    })
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

  render () {
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
            <p className='text-hel-95 text-black text-l'>Status:</p>
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

export default connect(mapStateToProps, { getInvoice })(DetailsOrderHistory)
