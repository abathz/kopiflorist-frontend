import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Col, Row, FormGroup, Input, Button } from 'reactstrap'
import { getProduct, resetStateProduct } from 'actions/index'

interface StateProps {
  id: number
  product: any
}

interface DispatchProps {
  getProduct: typeof getProduct
  resetStateProduct: typeof resetStateProduct
}

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent { }

class ShopDetail extends Component<PropsComponent, StateComponent> {
  componentDidMount () {
    this.props.getProduct(this.props.id)
  }

  componentWillUnmount () {
    this.props.resetStateProduct()
  }

  renderListPhoto () {
    const { product } = this.props
    return _.map(product.other_photo, (data: any, index: number) => {
      return (
        <Col xs='4' key={index}>
          <img className='img-fluid' src={data}/>
        </Col>
      )
    })
  }

  render () {
    const { product } = this.props
    if (!product) return ''
    console.log(product)
    return (
      <Row>
        <Col xs='6'>
          <img className='img-fluid' src={product.photo} alt={product.name}/>
          <Row>
            {this.renderListPhoto()}
          </Row>
          <Row>
            <Col xs='4'>
              <FormGroup>
                <Input type='select' id='quantity'>
                  <option defaultChecked={true}>Quantity</option>
                  <option value='gr'>gr/bag</option>
                  <option value='kg'>kg/bag</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs='4' className='pt-2'>
              <span className='text-black text-hel-95 text-l'>IDR {product.price}</span>
              <span className='text-s text-black'> / {product.weight_in}</span>
            </Col>
          </Row>
          <Row>
            <Col xs='8'><Button block={true}>Buy</Button></Col>
          </Row>
        </Col>
        <Col>
          <p className='text-xl text-black text-hel-95'>{product.name}</p>
          <p className='text-ml text-black text-hel-95'>Product Description</p>
          <p className='text-m text-black text-hel-reg'>{product.description}</p>
          <div className='mb-4' style={{ borderBottom: '1pt solid #979797' }}/>
          <p className='text-ml text-black text-hel-95'>Detail</p>
          <p className='text-m text-black text-hel-reg'>{product.detail}</p>
          <div className='mb-4' style={{ borderBottom: '1pt solid #979797' }} />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = ({ shop }: any) => {
  const { product } = shop

  return { product }
}

export default connect(mapStateToProps, { getProduct, resetStateProduct })(ShopDetail)