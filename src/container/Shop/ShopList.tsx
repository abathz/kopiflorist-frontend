import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Col, Row } from 'reactstrap'
import { Link } from 'routes'
import { getAllProduct } from 'actions/index'

interface StateProps {
  size?: number
  cat?: boolean
  allProduct: any
}

interface DispatchProps {
  getAllProduct: typeof getAllProduct
}

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent { }

class ShopList extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)
  }

  componentDidMount () {
    this.props.getAllProduct()
  }

  renderList () {
    const { allProduct } = this.props
    if (!allProduct) return ''
    const product = this.props.size ? _.slice(allProduct.data, 0, 4) : allProduct.data
    return _.map(product, (data: any) => {
      if (!data.availability) return ''
      const slug = data.name.split(' ').join('-').toLowerCase()
      return (
        <Col key={data.id} xs='3' className='mb-5'>
          <Link route={`/shop/${data.id}/${slug}`} prefetch={true}>
            <a><img className='img-fluid' src={data.photo} alt={data.name} /></a>
          </Link>
          <div className='mt-3'>
            <p className='text-l text-hel-95 h4'>{data.name}</p>
            <p className='text-m text-os-reg text-justify'>{data.description}</p>
          </div>
        </Col>
      )
    })
  }

  renderCategories () {
    return _.map(['Roasted', 'GreenBeans', 'Merch', 'Other'], (data: any, index: number) => {
      return (
        <Col xs='2' className='mb-5' key={index}>
          <div className='list-categories-shop'>
            <div style={{ paddingTop: '6px', paddingLeft: '12px' }}>
              <img style={{ width: '35px' }} className='float-left' src={`/static/img/${data.toLowerCase()}.png`} />
              <p className='text-ml pl-2 text-white text-hel-bold float-left' style={{ paddingTop: '6px' }}>{data}</p>
            </div>
            <div className='clearfix' />
          </div>
        </Col>
      )
    })
  }

  render () {
    return (
      <>
        <Row>
          {this.props.cat ? '' : this.renderCategories()}
        </Row>
        <Row>
          {this.renderList()}
        </Row>
      </>
    )
  }
}

const mapStateToProps = ({ shop }: any) => {
  const { allProduct } = shop

  return { allProduct }
}

export default connect(mapStateToProps, { getAllProduct })(ShopList)
