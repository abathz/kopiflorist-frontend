import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'components/Common/Header'
import Footer from 'components/Common/Footer'
import BlogDetail from 'components/Blog/BlogDetail'

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
