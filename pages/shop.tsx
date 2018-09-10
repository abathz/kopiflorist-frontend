import React, { Component } from 'react'
import ShopList from 'components/Shop/ShopList'
import { Container } from 'reactstrap'
import Header from 'components/Common/Header'
import Footer from 'components/Common/Footer'

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
