import React, { Component } from 'react'
import axios from 'axios'
import { Row, Alert, Col } from 'reactstrap'
import { Link } from 'routes'

interface StateProps {
  query: any
}

interface DispatchProps { }

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent {
  count: number
}

class PaymentMidtrans extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.state = { count: 10 }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count - 1
      }))

      if (this.state.count === 0) {
        setTimeout(() => {
          window.location.href = '/order_history'
        }, 500)
      }
    }, 1000)
  }

  renderStatusPayment () {
    const { query } = this.props
    switch (query.transaction_status) {
      case 'capture':
      case 'settlement':
        return <Alert color='success'>Thank You</Alert>
      case 'pending':
        return <Alert color='info'>Proceed payment as instructed</Alert>
      case 'deny':
        return <Alert color='danger'>We could not receive your payment</Alert>
    }
  }

  render () {
    return (
      <Row>
        <Col xs='12'>
          {this.renderStatusPayment()}
        </Col>
        <Col className='text-center'>
          <span>Wait {this.state.count} second, or <Link route='home'><a>click here!</a></Link></span>
        </Col>
      </Row>
    )
  }
}

export default PaymentMidtrans
