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
          window.location.href = '/'
        }, 500)
      }
    }, 1000)
  }

  renderStatusPayment () {
    const { query } = this.props
    if (query.transaction_status === 'capture' || query.transaction_status === 'settlement') {
      return <Alert color='success'>Thank You</Alert>
    } else if (query.transaction_status === 'pending') {
      return <Alert color='success'>Proceed payment as instructed</Alert>
    } else if (query.transaction_status === 'deny') {
      return <Alert color='success'>We could not receive your payment</Alert>
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
