import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'components/Common/Header'
import Footer from 'components/Common/Footer'
import AboutBanner from 'components/About/AboutBanner'
import AboutContent from 'components/About/AboutContent'

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
