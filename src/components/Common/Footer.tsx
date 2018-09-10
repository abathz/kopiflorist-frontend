import React, { Component } from 'react'
import _ from 'lodash'
import { Col, Row } from 'reactstrap'
import { Link } from 'routes'

class Footer extends Component<{},{}> {
  render () {
    return (
      <footer className='container-fluid'>
        <Row>
          <Col xs='4'>
            <ul className='list-footer'>
              <Link route='#'>
                <li>Home</li>
              </Link>
              <Link route='#'>
                <li>Activities</li>
              </Link>
              <Link route='#'>
                <li>Product</li>
              </Link>
              <Link route='#'>
                <li>Blog</li>
              </Link>
              <Link route='#'>
                <li>How To Order</li>
              </Link>
            </ul>
          </Col>
          <Col xs='4'>
            <h4>Our Address</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
          <Col xs='4'>
            <Row className='mb-3'>
              {
                _.map(['instagram', 'facebook', 'twitter'], (data: any) => {
                  return (
                    <Col xs='2' >
                      <img className='img-fluid' src={`/static/img/${data}.png`} alt={data}/>
                    </Col>
                  )
                })
              }
            </Row>
            <Row>
              <Col xs='12'>
                <div className='text-black'>0812 1234 5678</div>
              </Col>
              <Col xs='12'>
                <div className='text-black'>Line ID</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    )
  }
}

export default Footer
