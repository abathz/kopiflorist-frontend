import React, { Component } from 'react'
import _ from 'lodash'
import { Col, Row } from 'reactstrap'
import { Link } from 'routes'

interface StateProps {
  size?: number
}

interface DispatchProps { }

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent { }

class CoffeeTripList extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)
  }

  renderList () {
    return _.map(Array(this.props.size || 6), (data: any, index: any) => {
      return (
        <Col key={index} xs='4' className='mb-5'>
          <Link route={`/coffee_trip/${index}`}>
            <div style={{ backgroundColor: '#333', height: '350px' }} />
          </Link>
          <div className='mt-3'>
            <p className='text-l text-hel-95 h4'>Lorem Ipsum</p>
            <p className='text-m text-os-reg text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </Col>
      )
    })
  }

  render () {
    return (
      <Row>
        {this.renderList()}
      </Row>
    )
  }
}

export default CoffeeTripList
