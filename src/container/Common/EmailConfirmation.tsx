import React, { Component } from 'react'
import axios from 'axios'
import { Row, Alert, Col } from 'reactstrap'
import { Link } from 'routes'

interface StateProps {
  hash?: string
}

interface DispatchProps {}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  count: number
}

class EmailConfirmation extends Component<PropsComponent, StateComponent> {
  constructor (props: PropsComponent) {
    super(props)

    this.state = { count: 10 }
  }

  componentDidMount () {
    axios.post(`/verify/${this.props.hash}`)
      .then(() => {
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
      })
  }

  render () {
    return (
      <Row>
        <Col xs='12'>
          <Alert color='success'>
            User Account Verified!
          </Alert>
        </Col>
        <Col className='text-center'>
          <span>Wait {this.state.count} second, or <Link route='home'><a>click here!</a></Link></span>
        </Col>
      </Row>
    )
  }
}

export default EmailConfirmation
