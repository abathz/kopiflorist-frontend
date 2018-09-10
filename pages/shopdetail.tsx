import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'components/Common/Header'
import Footer from 'components/Common/Footer'
import ShopDetail from 'components/Shop/ShopDetail'

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
