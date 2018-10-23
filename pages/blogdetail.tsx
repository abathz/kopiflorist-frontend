import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'container/Common/Header'
import Footer from 'container/Common/Footer'
import BlogDetail from 'container/Blog/BlogDetail'

export default class extends Component<{ query: any }, {}> {
  static async getInitialProps ({ query }: any) {
    return { query }
  }

  render () {
    return (
      <>
        <Container>
          <Header/>
          <BlogDetail id={this.props.query.id}/>
        </Container>
        <Footer/>
      </>
    )
  }
}
