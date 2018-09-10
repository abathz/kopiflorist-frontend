import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import '../src/assets/scss'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <title>Kopi Florist</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='icon' type='image/png' href='/static/img/favicon.ico' />
          <link rel='stylesheet' href='/_next/static/style.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
