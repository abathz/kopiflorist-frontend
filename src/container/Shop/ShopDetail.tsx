import React, { Component, ChangeEvent } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Col, Row, FormGroup, Input, Button, Alert } from 'reactstrap'
import { Link } from 'routes'
import { getProduct, resetStateProduct, updateDataShop, orderProduct } from 'actions/index'
import ModalAuth from 'container/Common/ModalAuth'

interface StateProps {
  id: number
  product: any
  shop: any
}

interface DispatchProps {
  getProduct: typeof getProduct
  resetStateProduct: typeof resetStateProduct
  updateDataShop: typeof updateDataShop
  orderProduct: typeof orderProduct
}

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent {
  quality: string
  modal: boolean
  errorMessage: string
}

class ShopDetail extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.state = {
      quality: '',
      modal: false,
      errorMessage: ''
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onBuyClicked = this.onBuyClicked.bind(this)
  }

  componentDidMount () {
    this.props.getProduct(this.props.id)
  }

  componentWillUnmount () {
    this.props.resetStateProduct()
  }

  toggleModal () {
    this.setState((prevState) => ({
      modal: !prevState.modal
    }))
  }

  onInputChange (e: ChangeEvent<HTMLInputElement>) {
    this.props.updateDataShop({ prop: 'quantity', value: e.target.value })
  }

  onBuyClicked () {
    const { product, shop } = this.props
    const isUserNotLoggedin: boolean = localStorage.getItem('token') === null ? true : false

    let data = {
      id: product.id,
      quantity: shop.quantity
    }

    if (isUserNotLoggedin) {
      this.toggleModal()
    } else {
      if (shop.quantity > 0) {
        this.props.orderProduct(data)
      } else {
        this.setState({ errorMessage: 'Min. order 1 quantity' })
      }
    }
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
    return (
      <>
        <Row>
          <Col xs='6'>
            <img className='img-fluid mb-4' src={product.photo} alt={product.name} />
            <Row className='mb-4'>
              {this.renderListPhoto()}
            </Row>
          </Col>
          <Col xs={{ size: 5, offset: 1 }}>
            <p className='text-xl text-black text-hel-95'>{product.name}</p>
            <p className='text-ml text-black text-hel-95'>Product Description</p>
            <p className='text-m text-black text-hel-reg'>{product.description}</p>
            <div className='mb-4' style={{ borderBottom: '1pt solid #979797' }} />
            <p className='text-ml text-black text-hel-95'>Detail</p>
            <p className='text-m text-black text-hel-reg'>{product.detail}</p>
            <div className='mb-4' style={{ borderBottom: '1pt solid #979797' }} />
            <Row>
              <Col xs='4'>
                <FormGroup>
                  <Input type='select' id='quantity' onChange={this.onInputChange}>
                    <option defaultChecked={true}>Quantity</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col className='pt-2'>
                <span className='text-black text-hel-95 text-l'>IDR {product.price}</span>
                <span className='text-s text-black'> / {product.weight_in}</span>
                <span className='text-ml text-black' style={{ marginLeft: '45px' }}>Stock: <span className='text-black text-hel-95 text-l'>{product.quantity}</span></span>
              </Col>
            </Row>
            <Row>
              <Col xs='12'>
                {this.state.errorMessage !== '' ? <Alert color='danger'>{this.state.errorMessage}</Alert> : ''}
                <Button block={true} className='button-yellow' onClick={this.onBuyClicked}>Buy</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <ModalAuth modal={this.state.modal} toggleModal={this.toggleModal} />
      </>
    )
  }
}

const mapStateToProps = ({ shop }: any) => {
  const { product } = shop

  return { product, shop }
}

export default connect(mapStateToProps, {
  getProduct,
  resetStateProduct,
  updateDataShop,
  orderProduct
})(ShopDetail)
