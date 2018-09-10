import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'

class AboutContent extends Component<{},{}> {
  render () {
    return (
      <>
        <Row style={{ marginBottom: '50px' }}>
          <Col xs='12'>
            <h5>Who We Are</h5>
            <p className='text-justify'>
              Never forget where we came from, but never let that hold us back from where we want to go. The journey began in 2009 when Pak Yadi & friends got their hands dirty helping out a few local coffee farmers and mostly vegetable farmers to understand the potency of proper coffee cultivation in North Bandung Highlands– West Java for their sustainable economy as well as the environment.
              <br/>It turns out that the public enthusiasm was very high until most of the non-organic vegetable farmers rehabilitated and shifted their lands to organic coffee farm. Until five years later, most of us celebrated our harvest period and Pak Yadi & local cooperative continued the movement to develop a coffee post-harvest processing facility and most importantly the knowledge. The old semi-washed process now has another options as we successfully developed various processes including natural, white honey, yellow honey, red honey, black honey, full-washed etc. Ironically, majority of this premium coffee were exported worldwide as the domestic market was not developed.
              <br/>Only in 2016, we started to build our very first tiny coffee shop in the middle of a florist park at Tegalega Bandung to provide a direct coffee trade for local consumers; people who could appreciate coffee as the way it is. Nowadays, Kopi Florist has three coffee shops in Bandung and the brand new website marks our new direction to provide closer access to a whole story of our coffee movement from farm to cups. So welcome to our journey!
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs='6'>
            <h5>What We Do</h5>
            <p className='text-justify'>
              Our team has worked collaboratively in entire coffee supply chain from farming, processing, roasting, supplying and selling. At Kopi Florist we provide roasters, coffee brewers and end consumers to our finest Indonesian specialty green and roasted coffee beans.
              <br/>In addition to it, we also make a serious effort to establish coffee education and coffee origin trip program. CSR program will always be our program every year to achieve a sustainability living within our business.
            </p>
          </Col>
          <Col xs='6'>
            <div style={{ backgroundColor: '#333', height: '100%' }}/>
          </Col>
        </Row>
      </>
    )
  }
}

export default AboutContent
