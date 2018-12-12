import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'container/Common/Header'
import Footer from 'container/Common/Footer'
import Checkout from 'container/CartCheckout/Checkout'

export default class extends Component<{}, {}> {
  render () {
    return (
      <>
        <Container>
          <Header />
          <Checkout/>
        </Container>
        <Footer />
      </>
    )
  }
}
