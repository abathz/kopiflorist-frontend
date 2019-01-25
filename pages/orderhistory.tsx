import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'container/Common/Header'
import Footer from 'container/Common/Footer'
import OrderHistory from 'container/User/OrderHistory'

export default class extends Component<{}, {}> {
  render () {
    return (
      <>
        <Container>
          <Header />
          <OrderHistory/>
        </Container>
        <Footer />
      </>
    )
  }
}
