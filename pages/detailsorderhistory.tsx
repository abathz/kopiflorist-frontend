import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'container/Common/Header'
import Footer from 'container/Common/Footer'
import OrderHistory from 'container/User/OrderHistory'
import DetailsOrderHistory from 'container/User/DetailsOrderHistory'

export default class extends Component<{ query: any }, {}> {
  static async getInitialProps ({ query }: any) {
    return { query }
  }
  render () {
    return (
      <>
        <Container>
          <Header />
          <DetailsOrderHistory id={this.props.query.id}/>
        </Container>
        <Footer />
      </>
    )
  }
}
