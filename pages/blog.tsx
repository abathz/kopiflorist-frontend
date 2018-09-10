import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'components/Common/Header'
import Footer from 'components/Common/Footer'
import BlogList from 'components/Blog/BlogList'

export default class extends Component<{}, {}> {
  render () {
    return (
      <>
        <Container>
          <Header />
          <BlogList/>
        </Container>
        <Footer/>
      </>
    )
  }
}
