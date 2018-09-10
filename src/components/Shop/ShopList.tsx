import React, { Component } from 'react'
import _ from 'lodash'
import { Col, Row } from 'reactstrap'
import { Link } from 'routes'

interface StateProps {
  size?: number
  cat?: boolean
}

interface DispatchProps { }

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent { }

class ShopList extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)
  }

  renderCategories () {
    return _.map(['Roasted', 'GreenBeans', 'Merch', 'Other'], (data: any) => {
      return (
        <Col xs='2' className='mb-5'>
          <div className='list-categories-shop'>
            <div style={{ paddingTop: '6px', paddingLeft: '12px' }}>
              <img style={{ width: '35px' }} className='float-left' src={`/static/img/${data.toLowerCase()}.png`} />
              <p className='text-ml pl-2 text-white text-hel-bold float-left' style={{ paddingTop: '6px' }}>{data}</p>
            </div>
            <div className='clearfix'/>
          </div>
        </Col>
      )
    })
  }

  renderList () {
    return _.map(Array(this.props.size || 6), (data: any, index: any) => {
      return (
        <Col key={index} xs='3' className='mb-5'>
          <Link route={`/shop/${index}`}>
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
      <>
        <Row>
          {
            this.props.cat ? '' : this.renderCategories()
          }
        </Row>
        <Row>
          {this.renderList()}
        </Row>
      </>
    )
  }
}

export default ShopList
