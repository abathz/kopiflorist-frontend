import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'components/Common/Header'
import Footer from 'components/Common/Footer'
import CoffeeTripList from 'components/CoffeeTrip/CoffeeTripList'

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
