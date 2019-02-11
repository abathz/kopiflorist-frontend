import React, { Component, FormEvent, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Table, Row, Col, Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, Form } from 'reactstrap'
import { Link } from 'routes'
import { getAllCart, deleteOrderProduct, deleteOrderTrip } from 'actions'
import moment from 'moment'

interface StateProps {
  dataProduct: any
  dataTrip: any
  shop: any
}

interface DispatchProps {
  getAllCart: typeof getAllCart
  deleteOrderProduct: typeof deleteOrderProduct
  deleteOrderTrip: typeof deleteOrderTrip
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  modal: boolean
  totalPrice: number
  isSmallDevices: boolean
}

class Cart extends Component<PropsComponent, StateComponent> {
  constructor (props: PropsComponent) {
    super(props)

    this.state = {
      modal: false,
      totalPrice: 0,
      isSmallDevices: false
    }
  }

  componentDidMount () {
    this.props.getAllCart()
    this.setState({ isSmallDevices: window.outerWidth < 576 })
  }

  componentDidUpdate () {
    const { dataProduct, dataTrip } = this.props
    const totalPriceTrip = _.map(dataTrip.cart_trip, (data: any) => data.package.price).reduce((a: number, b: number) => a + b, 0)
    const totalPriceProduct = _.map(dataProduct.cart_product, (data: any) => data.total_price).reduce((a: number, b: number) => a + b, 0)
    let totalPrice = totalPriceProduct + totalPriceTrip
    if (this.state.totalPrice !== totalPrice) {
      this.setState({ totalPrice })
    }
  }

  onProductCartDeleted = (idCartProduct: number) => () => {
    this.props.deleteOrderProduct(idCartProduct)
  }

  onTripCartDeleted = (idCartTrip: number) => () => {
    this.props.deleteOrderTrip(idCartTrip)
  }

  dataTripCart () {
    const { dataTrip } = this.props
    return _.map(dataTrip.cart_trip, (data: any, index: number) => {
      let tripDate = data.trip_date.substring(0, 10)
      let date = moment(tripDate).format('DD MMMM YYYY')
      return (
        <tr key={index}>
          <td>
            <img className='img-fluid mr-3' src={data.photo} width='80' />
            <span className='text-os-reg text-ml text-black-light'>{`${data.title} (${date} : ${data.duration_in_days} ${data.duration_in_days > 1 ? 'days' : 'day'})`}</span>
          </td>
          <td style={{ paddingTop: '38px' }} className='text-os-reg text-ml text-black-light'>Rp {data.package.price}</td>
          <td style={{ paddingTop: '38px' }} className='text-os-reg text-ml text-black-light'>{data.quantity}</td>
          <td style={{ paddingTop: '38px' }} className='text-os-reg text-ml text-black-light'>Rp {data.package.price}</td>
          <td style={{ paddingTop: '30px' }}>
            <Button color='danger' onMouseDown={this.onTripCartDeleted(data.id)}>Delete</Button>
          </td>
        </tr>
      )
    })
  }

  dataProductCart () {
    const { dataProduct } = this.props
    return _.map(dataProduct.cart_product, (data: any, index: number) => {
      return (
        <tr key={index}>
          <td>
            <img className='img-fluid mr-3' src={data.photo} width='80' />
            <span className='text-os-reg text-ml text-black-light'>{data.name}</span>
          </td>
          <td style={{ paddingTop: '38px' }} className='text-os-reg text-ml text-black-light'>Rp {data.price}</td>
          <td style={{ paddingTop: '38px' }} className='text-os-reg text-ml text-black-light'>{data.quantity}</td>
          <td style={{ paddingTop: '38px' }} className='text-os-reg text-ml text-black-light'>Rp {data.total_price}</td>
          <td style={{ paddingTop: '30px' }}>
            <Button color='danger' onMouseDown={this.onProductCartDeleted(data.id)}>Delete</Button>
          </td>
        </tr>
      )
    })
  }

  render () {
    return (
      <>
        <Row>
          <Col>
            <p className='text-hel-95 text-xl'>My Cart</p>
            <Table responsive={true}>
              <thead>
                <tr>
                  <th>Activity/Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th colSpan={2}>Total</th>
                </tr>
              </thead>
              <tbody>
                {this.dataTripCart()}
                {this.dataProductCart()}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col className='text-right'>
            <span className={`float-right ${!this.state.isSmallDevices ? 'mr-5' : '' } text-black-light text-xl`}>
              Rp {this.state.totalPrice}
            </span>
            <p className='float-right mr-5 pt-3 text-hel-95 text-l text-black'>Sub Total</p>
            <div className='clearfix'/>
          </Col>
        </Row>
        <Row>
          <Col className='text-right'>
            <Link route='home'><Button block={this.state.isSmallDevices}>Continue Shopping</Button></Link>
            <Link route='checkout'>
              <Button
                block={this.state.isSmallDevices}
                className='button-yellow'
                style={{
                  width: !this.state.isSmallDevices ? '160px' : '',
                  marginLeft: !this.state.isSmallDevices ? '50px' : ''
                }}
              >
                Checkout
              </Button>
            </Link>
          </Col>
        </Row>
      </>
    )
  }
}

const mapStateToProps = ({ cartcheckout, shop }: any) => {
  const { dataProduct, dataTrip } = cartcheckout
  return { dataProduct, dataTrip, shop }
}

export default connect(mapStateToProps, { getAllCart, deleteOrderProduct, deleteOrderTrip })(Cart)
