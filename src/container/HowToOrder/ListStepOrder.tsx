import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

class ListStepOrder extends Component<{}, {}> {
  render () {
    return (
      <>
        <Row>
          <Col xs='12' className='mb-3'>
            <h5>How To Order</h5>
          </Col>
        </Row>
        <Row className='mb-5'>
        <Col xs='1' className='m-auto'>
          <div style={{ borderBottom: '2px solid #FEB411' }} />
        </Col>
        <Col className='text-center'>
          <div className='text-xl text-yellow'>1</div>
          <h6>Choose Item</h6>
        </Col>
        <Col xs='2' className='m-auto'>
          <div style={{ borderBottom: '2px solid #FEB411' }} />
        </Col>
        <Col className='text-center'>
          <div className='text-xl text-yellow'>2</div>
          <h6>View Cart</h6>
        </Col>
        <Col xs='2' className='m-auto'>
          <div style={{ borderBottom: '2px solid #FEB411' }} />
        </Col>
        <Col className='text-center'>
          <div className='text-xl text-yellow'>3</div>
          <h6>Checkout</h6>
        </Col>
        <Col xs='2' className='m-auto'>
          <div style={{ borderBottom: '2px solid #FEB411' }} />
        </Col>
        <Col className='text-center'>
          <div className='text-xl text-yellow'>4</div>
          <h6>Pay</h6>
        </Col>
        <Col xs='1' className='m-auto'>
          <div style={{ borderBottom: '2px solid #FEB411' }} />
        </Col>
      </Row>
      </>
    )
  }
}

export default ListStepOrder
