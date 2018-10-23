import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'container/Common/Header'
import Footer from 'container/Common/Footer'
import BlogList from 'container/Blog/BlogList'

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
