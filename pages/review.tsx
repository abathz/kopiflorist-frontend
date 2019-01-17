import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'container/Common/Header'
import Footer from 'container/Common/Footer'
import ReviewList from 'container/Review/ReviewList'

export default class extends Component<{}, {}> {
  render () {
    return (
      <>
        <Container>
          <Header />
          <ReviewList/>
        </Container>
        <Footer />
      </>
    )
  }
}
