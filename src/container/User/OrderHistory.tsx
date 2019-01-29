import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Table } from 'reactstrap'
import { Link } from 'routes'
import { getUserTransaction } from 'actions/index'
import _ from 'lodash'
import moment from 'moment'

interface StateProps {
  userTransaction: any[]
}

interface DispatchProps {
  getUserTransaction: typeof getUserTransaction
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  active: string
}

class OrderHistory extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.state = { active: '' }
  }

  componentDidMount () {
    this.setState({ active: window.location.pathname })

    this.props.getUserTransaction()
  }

  renderDataTable () {
    const { userTransaction } = this.props
    return _.map(userTransaction, (data: any, index: number) => {
      const date = moment(data.updatedAt).format('DD MMMM YYYY')
      const time = moment(data.updatedAt).format('HH:MM')
      return (
        <tr key={index}>
          <td>{date} {time}</td>
          <td>{data.invoice_code}</td>
        </tr>
      )
    })
  }

  render () {
    return (
      <>
        <Row>
          <Col xs='10'>
            <h1 className='text-reg-95 text-black text-xl'>My Account</h1>
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
            <Table>
              <thead>
                <tr>
                  <th>Order Date & Time</th>
                  <th>Transaction Code</th>
                  <th>Coffee Trip/Product</th>
                  <th>Guest/Quantity</th>
                  <th>Total Price</th>
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
  const { userTransaction } = user

  return { userTransaction }
}

export default connect(mapStateToProps, { getUserTransaction })(OrderHistory)
