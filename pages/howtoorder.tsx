import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'components/Common/Header'
import Footer from 'components/Common/Footer'
import ListStepOrder from 'components/HowToOrder/ListStepOrder'
import OrderStepContent from 'components/HowToOrder/OrderStepContent'

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
