import React, { Component } from 'react'
import ShopList from 'container/Shop/ShopList'
import { Container } from 'reactstrap'
import Header from 'container/Common/Header'
import Footer from 'container/Common/Footer'

export default class extends Component<{},{}> {
  render () {
    return (
      <>
        <Container>
          <Header />
          <ShopList />
        </Container>
        <Footer />
      </>
    )
  }
}
