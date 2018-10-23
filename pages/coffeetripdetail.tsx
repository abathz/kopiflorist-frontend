import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'container/Common/Header'
import Footer from 'container/Common/Footer'
import CoffeeTripDetail from 'container/CoffeeTrip/CoffeeTripDetail'

export default class extends Component<{ query: any }, {}> {
  static async getInitialProps ({ query }: any) {
    return { query }
  }

  render () {
    return (
      <>
        <Container>
          <Header />
          <CoffeeTripDetail id={this.props.query.id}/>
        </Container>
        <Footer />
      </>
    )
  }
}
