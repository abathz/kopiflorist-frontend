import React, { Component } from 'react'
import { Container } from 'next/app'
import Header from 'container/Common/Header'
import Footer from 'container/Common/Footer'

export default class extends Component<{}, {}> {
  render () {
    return (
      <>
        <Container>
          <Header />
          <div/>
        </Container>
        <Footer />
      </>
    )
  }
}
