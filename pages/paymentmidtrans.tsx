import React, { Component } from 'react'
import PaymentMidtrans from 'container/Common/PaymentMidtrans'

export default class extends Component<{ query: any }, {}> {
  static async getInitialProps ({ query }: any) {
    return { query }
  }

  render () {
    return (
      <>
        <PaymentMidtrans query={this.props.query} />
      </>
    )
  }
}
