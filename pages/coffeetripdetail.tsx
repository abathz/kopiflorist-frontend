import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'components/Common/Header'
import Footer from 'components/Common/Footer'
import CoffeeTripDetail from 'components/CoffeeTrip/CoffeeTripDetail'

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
