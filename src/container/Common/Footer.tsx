import React, { Component } from 'react'
import _ from 'lodash'
import { Col, Row } from 'reactstrap'
import { Link } from 'routes'

class Footer extends Component<{},{}> {
  render () {
    return (
      <footer className='container-fluid'>
        <Row className='footer'>
          <Col lg='4' xs='12'>
            <ul className='list-footer'>
              <li><Link route='/about'><a>About</a></Link></li>
              <li><Link route='/coffeetrip'><a>Coffee Trip</a></Link></li>
              <li><Link route='/shop'><a>Shop</a></Link></li>
              <li><Link route='/blog'><a>Blog</a></Link></li>
              <li><Link route='/howtoorder'><a>How To Order</a></Link></li>
            </ul>
          </Col>
          <Col lg='4' xs='12'>
            <h4 className='text-white'>Our Address</h4>
            <h6 className='text-white'>Coffee Shop</h6>
            <p className='text-os-reg text-white text-m'>
              Pasar Bunga Tega Lega Kav. 6<br/>
              Jl. Moch. Toha No.79<br/>
              Ciateul, Regol<br/>
              Kota Bandung, Jawa Barat 40252
            </p>
          </Col>
          <Col lg='4' xs='12'>
            <Row className='mb-3'>
              <Col lg='6' xs='12'>
                <a href='https://www.instagram.com/kopi_florist/' target='_blank'><img className='img-fluid' src={`/static/img/instagram.png`} style={{ width: '35px' }} /><span className='text-os-reg text-white text-m ml-2'>kopi_florist</span></a>
              </Col>
            </Row>
            <Row>
              <Col xs='12'>
                <div className='text-os-reg text-white text-m'>+62 821-2114-4614</div>
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
