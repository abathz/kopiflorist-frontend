import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Table, Button } from 'reactstrap'
import { Link } from 'routes'
import { getUserInvoices } from 'actions'
import _ from 'lodash'
import moment from 'moment'

interface StateProps {
  userInvoices: any[]
}

interface DispatchProps {
  getUserInvoices: typeof getUserInvoices
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  active: string
}

class OrderHistory extends Component<PropsComponent, StateComponent> {
  constructor (props: PropsComponent) {
    super(props)

    this.state = { active: '' }
  }

  componentDidMount () {
    this.setState({ active: window.location.pathname })

    this.props.getUserInvoices()
  }

  renderDataTable () {
    const { userInvoices } = this.props
    return _.map(userInvoices, (data: any, index: number) => {
      const date = moment(data.updatedAt).format('DD MMMM YYYY')
      const time = moment(data.updatedAt).format('HH:MM')
      return (
        <tr key={index}>
          <td style={{ paddingTop: '20px' }}>{data.invoice_code}</td>
          <td style={{ paddingTop: '20px' }}>{date} ({time})</td>
          <td style={{ paddingTop: '20px' }}>Rp {data.total_price}</td>
          <td>
            <Link route='detailsorderhistory' params={{ id: data.id }}><Button color='info'>Details</Button></Link>
          </td>
          <td style={{ paddingTop: '20px' }}>{this.transactionStatus(data)}</td>
        </tr>
      )
    })
  }

  transactionStatus (dataPayment: any) {
    const paymentStatus = dataPayment.payment_status
    const paymentDetails = dataPayment.payment_details
    switch (paymentStatus) {
      case 0:
        if (paymentDetails !== null) {
          if (paymentDetails.need_action) {
            return 'Continue to Payment'
          } else {
            return 'Payment Pending'
          }
        } else {
          return 'Continue to Payment'
        }
      case 1:
        return 'Payment Success'
      case -1:
        return 'Payment Cancelled/Exprired'
      default:
        return ''
    }
  }

  render () {
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
            <Table responsive={true}>
              <thead>
                <tr>
                  <th>Transaction Code</th>
                  <th>Order Date & Time</th>
                  <th>Total Price</th>
                  <th>Action</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.renderDataTable()}
              </tbody>
            </Table>
          </Col>
        </Row>
      </>
    )
  }
}

const mapStateToProps = ({ user }: any) => {
  const { userInvoices } = user

  return { userInvoices }
}

export default connect(mapStateToProps, { getUserInvoices })(OrderHistory)
