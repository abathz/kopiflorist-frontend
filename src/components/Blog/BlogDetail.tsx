import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'

interface StateProps {
  id?: number
}

interface DispatchProps { }

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent { }

class BlogDetail extends Component<PropsComponent, StateComponent> {
  render () {
    return (
      <Row>
        <Col xs='12'>
          <div style={{ backgroundColor: '#333', height: '423.5px' }} />
          <p>{this.props.id}</p>
        </Col>
      </Row>
    )
  }
}

export default BlogDetail
