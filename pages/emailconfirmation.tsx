import React, { Component } from 'react'
import EmailConfirmation from 'container/Common/EmailConfirmation'

export default class extends Component<{ query: any }, {}> {
  static async getInitialProps ({ query }: any) {
    return { query }
  }

  render () {
    return (
      <>
        <EmailConfirmation hash={this.props.query.hash}/>
      </>
    )
  }
}
