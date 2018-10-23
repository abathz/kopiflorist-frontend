import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'container/Common/Header'
import Footer from 'container/Common/Footer'
import AboutBanner from 'container/About/AboutBanner'
import AboutContent from 'container/About/AboutContent'

export default class extends Component<{}, {}> {
  render () {
    return (
      <>
        <Container>
          <Header />
          <AboutBanner />
          <AboutContent />
        </Container>
        <Footer/>
      </>
    )
  }
}
