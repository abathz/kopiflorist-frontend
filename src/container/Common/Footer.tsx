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
                <li>About</li>
              </Link>
              <Link route='#'>
                <li>Coffee Trip</li>
              </Link>
              <Link route='#'>
                <li>Shop</li>
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
            <h4 className='text-white'>Our Address</h4>
            <p className='text-os-reg text-white text-m'>Jl. Gamelan No.6a, RW.09<br/>
              Turangga, Lengkong<br/>
              Kota Bandung, Jawa Barat 40264</p>
          </Col>
          <Col xs='4'>
            <Row className='mb-3'>
              <Col xs='2'>
                <a href='https://www.instagram.com/kopi_florist/' target='_blank'><img className='img-fluid' src={`/static/img/instagram.png`} /></a>
              </Col>
              <Col xs='2'>
                <a href='#'><img className='img-fluid' src={`/static/img/facebook.png`} /></a>
              </Col>
              <Col xs='2'>
                <a href='https://twitter.com/kopi_florist' target='_blank'><img className='img-fluid' src={`/static/img/twitter.png`} /></a>
              </Col>
            </Row>
            <Row>
              <Col xs='12'>
                <div className='text-os-reg text-white text-m'>0812 1234 5678</div>
              </Col>
              <Col xs='12'>
                <div className='text-os-reg text-white text-m'>sampurasun@kopiflorist.id</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    )
  }
}

export default Footer
