import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'container/Common/Header'
import Footer from 'container/Common/Footer'
import CoffeeTripList from 'container/CoffeeTrip/CoffeeTripList'

export default class extends Component<{},{}> {
  render () {
    return (
      <>
        <Container>
          <Header />
          <CoffeeTripList />
        </Container>
        <Footer/>
      </>
    )
  }
}
