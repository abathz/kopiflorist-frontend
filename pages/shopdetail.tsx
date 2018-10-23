import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'container/Common/Header'
import Footer from 'container/Common/Footer'
import ShopDetail from 'container/Shop/ShopDetail'

export default class extends Component<{ query: any }, {}> {
  static async getInitialProps ({ query }: any) {
    return { query }
  }

  render () {
    return (
      <>
        <Container>
          <Header />
          <ShopDetail id={this.props.query.id} />
        </Container>
        <Footer />
      </>
    )
  }
}
