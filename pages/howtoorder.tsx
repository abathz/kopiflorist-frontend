import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'container/Common/Header'
import Footer from 'container/Common/Footer'
import ListStepOrder from 'container/HowToOrder/ListStepOrder'
import OrderStepContent from 'container/HowToOrder/OrderStepContent'

export default class extends Component<{}, {}> {
  render () {
    return (
      <>
        <Container>
          <Header/>
          <ListStepOrder/>
          <OrderStepContent/>
        </Container>
        <Footer/>
      </>
    )
  }
}
