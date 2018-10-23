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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat placerat felis, non imperdiet enim convallis at. Vivamus ac mi dolor. Aliquam erat volutpat. Phasellus rutrum accumsan sapien sed sodales. Praesent ornare purus elit, eu iaculis risus gravida at. Curabitur rutrum maximus tortor eget lacinia. Sed metus sapien, accumsan eu tellus non, cursus malesuada tellus. Curabitur tellus risus, scelerisque eu fringilla nec, accumsan eu diam.
            <br /><br />Vestibulum volutpat eleifend eros. Morbi mattis malesuada sem, vitae mattis massa rhoncus sit amet. Phasellus faucibus, lacus eu commodo gravida, tortor massa faucibus enim, et accumsan ex tortor quis augue. Donec euismod volutpat risus. Duis blandit vehicula gravida. Morbi ac purus nec odio dapibus porta. Maecenas elementum vel dolor sed convallis. Sed ante augue, tristique eu scelerisque sed, fringilla non felis. Sed ultrices scelerisque lorem. Cras feugiat fermentum arcu, id porta justo lacinia ut.
            <br /><br />Nunc tempus tincidunt nibh, eu congue dolor porta vitae. Mauris lacinia eu libero in venenatis. Quisque quis efficitur ex. Phasellus ligula orci, tincidunt nec neque eu, ornare bibendum nisi. Quisque pulvinar nibh placerat aliquam aliquet. Curabitur mi nunc, posuere dapibus ante id, interdum dapibus diam. Morbi rhoncus ligula in turpis accumsan rutrum. Pellentesque id enim id ligula tempus rutrum ut a ex. Quisque eget venenatis sapien. Morbi non blandit nulla. Etiam nulla dolor, dictum vel vestibulum id, tempus non magna. Etiam tempor nisl interdum est iaculis, eu viverra nisi venenatis. Vivamus euismod viverra quam, at cursus mi imperdiet nec.
          </p>
        </Col>
      </Row>
    )
  }
}

export default OrderStepContent
