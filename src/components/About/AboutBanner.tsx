import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'

class AboutBanner extends Component<{}, {}> {
  render () {
    return (
      <>
        <Row style={{ marginBottom: '40px' }}>
          <Col xs='12'>
            <h1>About</h1>
          </Col>
        </Row>
        <Row style={{ marginBottom: '40px' }}>
          <Col xs='12' className='text-center'>
            <div style={{ backgroundColor: '#333', height: '423.5px' }} />
          </Col>
        </Row>
      </>
    )
  }
}

export default AboutBanner
