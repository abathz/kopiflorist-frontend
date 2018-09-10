import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'

interface StateProps {
  id?: number
}

interface DispatchProps { }

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent { }

class CoffeeTripDetail extends Component<PropsComponent, StateComponent> {

  render () {
    return (
      <Row>
        <Col xs='4'>
          <div style={{ backgroundColor: '#333', height: '350px' }} />
          <p>{this.props.id}</p>
        </Col>
      </Row>
    )
  }
}

export default CoffeeTripDetail
