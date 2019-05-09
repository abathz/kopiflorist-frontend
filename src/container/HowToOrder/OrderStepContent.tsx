import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'

class OrderStepContent extends Component<{}, {}> {
  render () {
    return (
      <Row>
        <Col xs={{ size: 8, offset: 2 }} className='mb-5'>
          <div style={{ backgroundColor: '#333', height: '450px' }} />
        </Col>
        <Col xs='12'>
          <ol>
            <li>
              Choose Item<br/>
              Click on Shop Tab and visit product detail page for an item you wish to buy. Tap on Quantity of the item you wish to buy, and tap Buy.
            </li><br/>
            <li>
              View Cart<br/>
              You will be redirected to you cart. Your item(s) will be displayed here, along with total price. Tap Continue Shopping if you wish to add another item to your cart. Or tap checkout if you already done your shop.
            </li><br/>
            <li>
              Checkout<br/>
              Review your order information and fill the the address of delivery with the preferred delivery method. If you have any coupon code, please tap Use Coupon Code and fill the code to get the benefit. Tap Pay to proceed to payment.
            </li><br/>
            <li>
              Pay<br/>
              Pay your ordered products and trips through our third-party payment gateway, Midtrans. Carefully follow the instructions listed on the Midtrans payment page.
            </li>
          </ol>
        </Col>
      </Row>
    )
  }
}

export default OrderStepContent
