import React, { Component } from 'react'
import {
  Container,
  Col,
  Row } from 'reactstrap'
import _ from 'lodash'
import Header from 'container/Common/Header'
import Footer from 'container/Common/Footer'
import HomeBanner from 'container/HomeBanner'
import ShopList from 'container/Shop/ShopList'
import CoffeeTripList from 'container/CoffeeTrip/CoffeeTripList'
import { Link } from 'routes'

interface StateProps { }

interface DispatchProps { }

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent {
  modal: boolean
}

export default class extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)
    this.state = {
      modal: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
    })
  }

  render () {
    return (
      <>
        <Container>
          <Header />
          <HomeBanner/>
          <Row>
            <Col xs='6'>
              <h3>Activity</h3>
            </Col>
            <Col xs='6' className='text-right mt-2'>
              <Link route='coffeetrip'>
                <a className='text-yellow text-hel-reg'>See more</a>
              </Link>
            </Col>
          </Row>
          <CoffeeTripList size={3} />
          <Row>
            <Col xs='6'>
              <h3>Shop</h3>
            </Col>
            <Col xs='6' className='text-right mt-2'>
              <Link route='shop'>
                <a className='text-yellow text-hel-reg'>See more</a>
              </Link>
            </Col>
          </Row>
          <ShopList size={4} cat={true}/>
        </Container>
        <Footer />
      </>
    )
  }
}
