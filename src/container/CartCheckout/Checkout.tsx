import React, { Component, ChangeEvent, FormEvent } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Row, Col, FormGroup, Label, Input, Form, Modal, ModalHeader, ModalBody, Button, Table, Alert, ListGroupItem, ListGroup } from 'reactstrap'
import {
  getProfile,
  getAllPickupMethod,
  getAllCart,
  getAllProvince,
  getAllCities,
  updateDataCheckout,
  getDeliveryCost,
  resetData,
  createInvoice
} from 'actions'
import moment from 'moment'

interface StateProps {
  profile: any
  allPickupMethod: any
  dataProduct: any
  dataTrip: any
  provinces: any
  cities: any
  cartcheckout: any
  deliveryCost: any
  myCart: any
}

interface DispatchProps {
  getProfile: typeof getProfile
  getAllPickupMethod: typeof getAllPickupMethod
  getAllCart: typeof getAllCart
  getAllProvince: typeof getAllProvince
  getAllCities: typeof getAllCities
  updateDataCheckout: typeof updateDataCheckout
  getDeliveryCost: typeof getDeliveryCost
  resetData: typeof resetData
  createInvoice: typeof createInvoice
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  modal: boolean
  messageAlert: string
  codePickup: string
  pickupMethodSelected: boolean
  addressSelected: boolean,
  idPickup: number
  idActiveList: number
  isFormShow: boolean
  isSmallDevice: boolean
}

class Checkout extends Component<PropsComponent, StateComponent> {
  constructor (props: PropsComponent) {
    super(props)

    this.state = {
      modal: false,
      messageAlert: '',
      codePickup: '',
      pickupMethodSelected: false,
      addressSelected: false,
      idPickup: 0,
      idActiveList: 0,
      isFormShow: false,
      isSmallDevice: false
    }
  }

  componentDidMount () {
    this.props.getAllPickupMethod()
    this.props.getAllCart()
    this.props.getAllProvince()
    this.setState({ isSmallDevice: window.outerWidth < 576 })
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal
    }))
  }

  onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'province') {
      let idProvince = e.target.value
      this.setState({ codePickup: '' })
      const node: any = ReactDOM.findDOMNode(this)
      if (node instanceof HTMLElement) {
        const child: any = node.querySelector('#pickup_method')
        child.selectedIndex = 0
      }
      this.props.updateDataCheckout({ prop: 'province', value: Number(idProvince) })
      this.props.getAllCities(Number(idProvince))
      this.props.resetData('all')
      return
    }

    if (e.target.id === 'city') {
      let cityId = e.target.value.split(',')[0]
      this.props.updateDataCheckout({ prop: 'city', value: Number(cityId) })

      let destination = this.props.cartcheckout.city

      if (destination !== Number(cityId) && destination !== 0) {
        this.setState({ codePickup: '' })
        this.props.resetData('cost')
        const node: any = ReactDOM.findDOMNode(this)
        if (node instanceof HTMLElement) {
          const child: any = node.querySelector('#pickup_method')
          child.selectedIndex = 0
        }
      }
      return
    }

    if (e.target.id === 'pickup_method') {
      let [ idPickupMethod, codePickupMethod ] = e.target.value.split(',')
      switch (codePickupMethod) {
        case 'gojek':
          this.setState({
            codePickup: 'gojek',
            pickupMethodSelected: true,
            messageAlert: 'Biaya antar ditanggung oleh customer'
          })
          return
        case 'dakota':
          this.setState({
            codePickup: 'dakota',
            pickupMethodSelected: true,
            messageAlert: 'Untuk pengiriman via DAKOTA harap hubungi +62 813-1375-5587 via Whatsapp'
          })
          return
        case 'jne':
          this.setState({
            codePickup: 'jne',
            pickupMethodSelected: true,
            idPickup: Number(idPickupMethod)
          })
          this.props.updateDataCheckout({ prop: e.target.id, value: Number(idPickupMethod) })
          return
        default:
          this.props.updateDataCheckout({ prop: e.target.id, value: e.target.value })
          return ''
      }
    }

    if (e.target.id === 'service') {
      let [ serviceName, priceService ] = e.target.value.split('-')
      this.props.updateDataCheckout({ prop: 'service', value: serviceName })
      this.props.updateDataCheckout({ prop: 'priceService', value: Number(priceService) })
      return
    }

    this.props.updateDataCheckout({ prop: e.target.id, value: e.target.value })
  }

  onUseCouponClicked = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal
    }))
  }

  onCouponSubmit = (e: FormEvent) => {
    e.preventDefault()
    this.setState((prevState) => ({
      modal: !prevState.modal
    }))
  }

  onPayClicked = () => {
    const { cartcheckout } = this.props
    let data: any
    data = {
      isAddressFill: false,
      cart_id: cartcheckout.myCart.id,
      address_id: cartcheckout.idAddress,
      pickup_method_id: cartcheckout.pickup_method,
      pickup_method_service: cartcheckout.service
    }

    if (this.state.isFormShow) {
      if (cartcheckout.address !== '' && cartcheckout.city !== 0 && cartcheckout.province !== 0 && cartcheckout.postal_code !== '') {
        data = {
          isAddressFill: true,
          address: cartcheckout.address,
          postal_code: cartcheckout.postal_code,
          province_id: cartcheckout.province,
          city_id: cartcheckout.city,
          pickup_method_id: cartcheckout.pickup_method,
          pickup_method_service: cartcheckout.service,
          cart_id: cartcheckout.myCart.id
        }
      }
    }

    this.props.createInvoice(data)
  }

  onAddAddressClicked = () => {
    this.setState(prevState => ({ isFormShow: !prevState.isFormShow }))
  }

  onAddressClicked = (id: number, index: number) => () => {
    const { profile } = this.props
    let { id: idAddress, city_id } = profile.address[index]
    let cartId = this.props.cartcheckout.myCart.id

    this.setState({
      idActiveList: id,
      addressSelected: true
    })
    this.props.getDeliveryCost(cartId, Number(city_id), this.state.idPickup)
    this.props.updateDataCheckout({ prop: 'city', value: city_id })
    this.props.updateDataCheckout({ prop: 'idAddress', value: idAddress })
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
          <td style={{ paddingTop: '38px' }} className='text-os-reg text-ml text-black-light text-center'>{data.quantity}</td>
          <td style={{ paddingTop: '38px' }} className='text-os-reg text-ml text-black-light'>Rp {data.package.price}</td>
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
          <td style={{ paddingTop: '38px' }} className='text-os-reg text-ml text-black-light text-center'>{data.quantity}</td>
          <td style={{ paddingTop: '38px' }} className='text-os-reg text-ml text-black-light'>Rp {data.total_price}</td>
        </tr>
      )
    })
  }

  renderTotalPrice () {
    const { dataProduct, dataTrip, cartcheckout } = this.props
    const totalPriceTrip = _.map(dataTrip.cart_trip, (data: any) => data.package.price).reduce((a: number, b: number) => a + b, 0)
    const totalPriceProduct = _.map(dataProduct.cart_product, (data: any) => data.total_price).reduce((a: number, b: number) => a + b, 0)
    let totalPrice = totalPriceProduct + totalPriceTrip + cartcheckout.priceService

    return totalPrice
  }

  renderModalCoupon () {
    return (
      <Modal style={{ marginTop: '200px' }} isOpen={this.state.modal} toggle={this.toggleModal}>
        <ModalHeader>Insert Code</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onCouponSubmit}>
            <FormGroup>
              <Label for='coupon_code'>Coupon Code</Label>
              <Input type='text' id='coupon_code' onChange={this.onInputChange} />
            </FormGroup>
            <Button className='float-right button-yellow' style={{ width: '150px' }}>Apply</Button>
            <div className='clearfix' />
          </Form>
        </ModalBody>
      </Modal>
    )
  }

  listUserAddress () {
    const { profile } = this.props
    if (this.state.pickupMethodSelected) {
      return (
        <>
          <ListGroup>
            {_.map(profile.address, (data: any, index: number) => {
              return (
                <ListGroupItem key={index} value={data.id} active={this.state.idActiveList === data.id} onMouseDown={this.onAddressClicked(data.id, index)} className='text-ml text-os-reg text-black-light' style={{ cursor: 'pointer' }}>
                  {`${data.address}, ${data.city}, ${data.province}, ${data.postal_code}`}
                </ListGroupItem>
              )
            })}
          </ListGroup>
          <Button className='text-s text-os-reg mt-2 mb-4 button-yellow' block={this.state.isSmallDevice} onMouseDown={this.onAddAddressClicked}>Add Address & Apply</Button>
        </>
      )
    }
    return <div/>
  }

  renderDataAddress () {
    const { profile, dataProduct } = this.props
    if (dataProduct.cart_product && dataProduct.cart_product.length === 0) return <div/>
    if (!profile.address) return <div/>
    if (profile.address.length === 0 || this.state.isFormShow) {
      return (
        <Form>
          <Button color='danger' className='text-s text-os-reg mt-2 mb-4' onMouseDown={this.onAddAddressClicked}>Cancel</Button>
          <FormGroup>
            <Label for='address'>Address</Label>
            <Input type='text' id='address' onChange={this.onInputChange}/>
          </FormGroup>
          <FormGroup>
            <Label for='province'>Province</Label>
            <Input type='select' id='province' onChange={this.onInputChange}>
              <option defaultChecked={true}/>
              {this.renderProvinces()}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for='city'>City</Label>
            <Input type='select' id='city' onChange={this.onInputChange}>
              <option defaultChecked={true}/>
              {this.renderCities()}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for='postal_code'>Postal Code</Label>
            <Input type='text' id='postal_code' onChange={this.onInputChange} />
          </FormGroup>
          <FormGroup>
            <Label for='pickup_method'>Pickup Method</Label>
            <Input type='select' id='pickup_method' onChange={this.onInputChange}>
              <option defaultChecked={true}>Choose Pickup Method</option>
              {this.renderDataPickupMethod()}
            </Input>
          </FormGroup>
          {this.renderAlertPickup()}
        </Form>
      )
    }
    return (
      <>
        <FormGroup>
          <Label for='pickup_method'>Pickup Method</Label>
          <Input type='select' id='pickup_method' onChange={this.onInputChange}>
            <option defaultChecked={true}>Choose Pickup Method</option>
            {this.renderDataPickupMethod()}
          </Input>
        </FormGroup>
        {this.listUserAddress()}
        {this.renderAlertPickup()}
      </>
    )
  }

  renderDataPickupMethod () {
    const { allPickupMethod, myCart } = this.props
    if (myCart === null || myCart.item_count === 0) window.location.href = '/'
    if (myCart.self_pickup_enabled) {
      return (
        <>
          <option value='self_pickup'>Ambil ditempat</option>
          {_.map(allPickupMethod, (data: any, index: number) => {
            return <option key={index} value={`${data.id},${data.code}`}>{data.pickup_method_name}</option>
          })}
        </>
      )
    }
    return _.map(allPickupMethod, (data: any, index: number) => {
      return <option key={index} value={`${data.id},${data.code}`}>{data.pickup_method_name}</option>
    })
  }

  renderProvinces () {
    const { provinces } = this.props
    return _.map(provinces, (data: any) => {
      return <option key={data.province_id} value={data.province_id}>{data.province}</option>
    })
  }

  renderCities () {
    const { cities } = this.props
    return _.map(cities, (data: any, index: number) => {
      return <option key={index} value={`${data.city_id},${data.postal_code}`} >{data.type} {data.city_name}</option>
    })
  }

  renderAlertPickup () {
    const { deliveryCost } = this.props
    if (this.state.codePickup === 'dakota' || this.state.codePickup === 'gojek') {
      return <Alert color='info'>{this.state.messageAlert}</Alert>
    } else if (this.state.codePickup === 'jne' && this.state.addressSelected) {
      if (deliveryCost === null) return <p>Loading...</p>
      return (
        <FormGroup>
          <Label for='service'>Service</Label>
          <Input type='select' id='service' onChange={this.onInputChange}>
            <option defaultChecked={true}>Choose Service</option>
            {_.map(this.props.deliveryCost.costs, (data: any, index: number) => {
              let [ minEstimateDeliveryDay, maxEstimateDeliveryDay ] = data.cost[0].etd.split('-')
              if (minEstimateDeliveryDay === maxEstimateDeliveryDay) {
                return <option key={index} value={`${data.service}-${data.cost[0].value}`}>{data.service} (One Day)</option>
              }
              return <option key={index} value={`${data.service}-${data.cost[0].value}`}>{data.service} ({`${minEstimateDeliveryDay}-${maxEstimateDeliveryDay} days`})</option>
            })}
          </Input>
        </FormGroup>
      )
    }

    return <div />
  }

  render () {
    const { cartcheckout } = this.props
    return (
      <>
        <Row>
          <Col xs='12'>
            <p className='text-hel-95 text-xl'>Checkout</p>
          </Col>
          <Col lg='6' xs='12'>
            {this.renderDataAddress()}
          </Col>
          <Col lg='6' xs='12'>
            <h5>My Cart</h5>
            <Table responsive={true}>
              <thead>
                <tr>
                  <th>Activity/Product</th>
                  <th>Quantity</th>
                  <th className='text-center'>Price</th>
                </tr>
              </thead>
              <tbody>
                {this.dataTripCart()}
                {this.dataProductCart()}
              </tbody>
            </Table>
            {
              cartcheckout.priceService !== 0
                ? <p className='float-right text-hel-95 text-ml'>
                    Biaya Pengiriman <span className='text-hel-reg text-l'>Rp {cartcheckout.priceService}</span>
                  </p>
                : <div/>
            }
            <div className='clearfix' />
            <p className='float-right text-hel-95 text-ml'>Total <span className='text-hel-reg text-l'>Rp {this.renderTotalPrice()}</span></p>
            <div className='clearfix' />
            <div className='text-yellow text-s float-right' style={{ cursor: 'pointer' }} onMouseDown={this.onUseCouponClicked}>Use Coupon Code</div>
            <div className='clearfix' />
            <Button className='mt-4 button-yellow' block={true} onMouseDown={this.onPayClicked}>Pay</Button>
          </Col>
        </Row>
        {this.renderModalCoupon()}
      </>
    )
  }
}

const mapStateToProps = ({ user, cartcheckout, rajaongkir }: any) => {
  const { profile } = user
  const { allPickupMethod, dataProduct, dataTrip, myCart } = cartcheckout
  const { provinces, cities, deliveryCost } = rajaongkir

  return {
    profile,
    allPickupMethod,
    dataProduct,
    dataTrip,
    provinces,
    cities,
    cartcheckout,
    deliveryCost,
    myCart
  }
}

export default connect(mapStateToProps, {
  getProfile,
  getAllPickupMethod,
  getAllCart,
  getAllProvince,
  getAllCities,
  updateDataCheckout,
  getDeliveryCost,
  resetData,
  createInvoice
})(Checkout)
