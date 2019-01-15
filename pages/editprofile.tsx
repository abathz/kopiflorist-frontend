import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'container/Common/Header'
import Footer from 'container/Common/Footer'
import EditProfile from 'container/User/EditProfile'

export default class extends Component<{}, {}> {
  render () {
    return (
      <>
        <Container>
          <Header />
          <EditProfile />
        </Container>
        <Footer />
      </>
    )
  }
}
