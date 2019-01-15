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
  resetData
} from 'actions/index'

interface StateProps {
  profile: any
  allPickupMethod: any
  dataProduct: any
  dataTrip: any
  provinces: any
  cities: any
  cartcheckout: any
  deliveryCost: any
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
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  modal: boolean
  messageAlert: string
  codePickup: string
  idPickup: number
  idAcitveList: number
}

const arrMonth: any = []
arrMonth[1] = 'January'
arrMonth[2] = 'February'
arrMonth[3] = 'March'
arrMonth[4] = 'April'
arrMonth[5] = 'May'
arrMonth[6] = 'June'
arrMonth[7] = 'July'
arrMonth[8] = 'August'
arrMonth[9] = 'September'
arrMonth[10] = 'October'
arrMonth[11] = 'November'
arrMonth[12] = 'December'

class Checkout extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.state = {
      modal: false,
      messageAlert: '',
      codePickup: '',
      idPickup: 0,
      idAcitveList: 0
    }

    this.onUseCouponClicked = this.onUseCouponClicked.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.onCouponSubmit = this.onCouponSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onPayClicked = this.onPayClicked.bind(this)
  }

  componentDidMount () {
    this.props.getAllPickupMethod()
    this.props.getAllCart()
    this.props.getAllProvince()
  }

  toggleModal () {
    this.setState((prevState) => ({
      modal: !prevState.modal
    }))
  }

  onInputChange (e: ChangeEvent<HTMLInputElement>) {
    if (e.target.id === 'province') {
      let idProvince = e.target.value
      this.setState({ codePickup: '' })
      const node: any = ReactDOM.findDOMNode(this)
      if (node instanceof HTMLElement) {
        const child: any = node.querySelector('#pickup_method')
        child.selectedIndex = 0
      }
      this.props.getAllCities(Number(idProvince))
      this.props.resetData('all')
      return
    }

    if (e.target.id === 'city') {
      let postalCode = e.target.value.split(',')[1]
      let cityId = e.target.value.split(',')[0]
      this.props.updateDataCheckout({ prop: 'postal_code', value: postalCode })
      this.props.updateDataCheckout({ prop: 'city', value: cityId })

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
      switch (e.target.value.split(',')[1]) {
        case 'gojek':
          this.setState({
            codePickup: 'gojek',
            messageAlert: 'Biaya antar ditanggung oleh customer'
          })
          return
        case 'dakota':
          this.setState({
            codePickup: 'dakota',
            messageAlert: 'Untuk pengiriman via DAKOTA harap hubungi +62 813-1375-5587 via Whatsapp'
          })
          return
        case 'jne':
          let cartId = this.props.cartcheckout.myCart.id
          let destination = this.props.cartcheckout.city

          this.setState({
            idPickup: Number(e.target.value.split(',')[0]),
            codePickup: 'jne'
          })

          this.props.getDeliveryCost(cartId, Number(destination), Number(e.target.value.split(',')[0]))
          return
        default:
          return ''
      }
    }
    this.props.updateDataCheckout({ prop: e.target.id, value: e.target.value })
  }

  onUseCouponClicked () {
    this.setState((prevState) => ({
      modal: !prevState.modal
    }))
  }

  onCouponSubmit (e: FormEvent) {
    e.preventDefault()
    this.setState((prevState) => ({
      modal: !prevState.modal
    }))
  }

  onPayClicked () {
    const { cartcheckout } = this.props
    console.log(cartcheckout)
  }

  onAddressClicked (id: number, index: number) {
    const { profile, cartcheckout } = this.props
    let cartId = cartcheckout.myCart.id
    let address = profile.address[index]
    let destination = address.city_id

    this.setState({ idActiveList: id })
    this.props.updateDataCheckout({ prop: 'city', value: destination })

  }

  dataTripCart () {
    const { dataTrip } = this.props
    return _.map(dataTrip, (data: any, index: number) => {
      let arrDate = data.trip_date.substring(0, 10).split('-')
      let date = `${arrDate[2]} ${arrMonth[Number(arrDate[1])]} ${arrDate[0]}`
      return (
        <tr key={index}>
          <td>
            <img className='img-fluid mr-3' src={data.photo} width='80' />
            <span className='text-os-reg text-ml text-black-light'>{`${data.title} (${date} : ${data.duration_in_days} ${data.duration_in_days > 1 ? 'days' : 'day'})`}</span>
          </td>
          <td style={{ paddingTop: '38px' }} className='text-os-reg text-ml text-black-light text-center'>{data.quantity}</td>
          <td style={{ paddingTop: '38px' }} className='text-os-reg text-ml text-black-light'>Rp {data.price}</td>
        </tr>
      )
    })
  }

  dataProductCart () {
    const { dataProduct } = this.props
    return _.map(dataProduct, (data: any, index: number) => {
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
    const { dataProduct, dataTrip } = this.props
    const totalPriceTrip = _.map(dataTrip, (data: any) => data.price).reduce((a: number, b: number) => a + b, 0)
    const totalPriceProduct = _.map(dataProduct, (data: any) => data.total_price).reduce((a: number, b: number) => a + b, 0)
    let totalPrice = totalPriceProduct + totalPriceTrip

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
            <Button className='float-right' style={{ width: '150px' }}>Apply</Button>
            <div className='clearfix' />
          </Form>
        </ModalBody>
      </Modal>
    )
  }

  renderDataAddress () {
    const { profile, cartcheckout } = this.props
    if (!profile.address) return <div/>
    if (profile.address.length === 0) {
      return (
        <Form>
          <FormGroup>
            <Label for='address'>Address</Label>
            <Input type='text' id='address' />
          </FormGroup>
          <FormGroup>
            <Label for='province'>Province</Label>
            <Input type='select' id='province' onChange={this.onInputChange}>
              <option defaultChecked={true}>{}</option>
              {this.renderProvinces()}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for='city'>City</Label>
            <Input type='select' id='city' onChange={this.onInputChange}>
              <option defaultChecked={true}>{}</option>
              {this.renderCities()}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for='postal_code'>Postal Code</Label>
            <Input type='text' id='postal_code' defaultValue={cartcheckout.postal_code || ''} />
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
        <ListGroup className='mb-4'>
          {
            _.map(profile.address, (data: any, index: number) => {
              return <ListGroupItem key={index} value={data.id} active={this.state.idActiveList === data.id} onMouseDown={this.onAddressClicked.bind(this, data.id, index)} className='text-ml text-os-reg text-black-light' style={{ cursor: 'pointer' }}>{`${data.address}, ${data.city}, ${data.province}, ${data.postal_code}`}</ListGroupItem>
            })
          }
        </ListGroup>
        <FormGroup>
          <Label for='pickup_method'>Pickup Method</Label>
          <Input type='select' id='pickup_method' onChange={this.onInputChange}>
            <option defaultChecked={true}>Choose Pickup Method</option>
            {this.renderDataPickupMethod()}
          </Input>
        </FormGroup>
        {this.renderAlertPickup()}
      </>
    )
  }

  renderDataPickupMethod () {
    const { allPickupMethod } = this.props
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
    if (this.state.codePickup === 'dakota' || this.state.codePickup === 'gojek') {
      return <Alert color='info'>{this.state.messageAlert}</Alert>
    } else if (this.state.codePickup === 'jne') {
      return (
        <FormGroup>
          <Label for='service'>Service</Label>
          <Input type='select' id='service'>
            <option defaultChecked={true}>Choose Service</option>
            {_.map(this.props.deliveryCost.costs, (data: any, index: number) => {
              return <option key={index}>{data.service}</option>
            })}
          </Input>
        </FormGroup>
      )
    } else {
      return <div/>
    }
  }

  render () {
    const { cartcheckout } = this.props
    return (
      <>
        <Row>
          <Col xs='12'>
            <p className='text-hel-95 text-xl'>Checkout</p>
          </Col>
          <Col xs='6'>
            {this.renderDataAddress()}
          </Col>
          <Col xs={{ size: 5, offset: 1 }}>
            <p>Summary</p>
            <span className='text-black text-hel-reg text-m'>Total Price</span><span className='float-right text-black text-os-reg text-m'>Rp {this.renderTotalPrice()}</span>
            <div className='clearfix' />
            <span className='text-black text-hel-reg text-m'>Applied Promo</span><span className='float-right text-black text-os-reg text-m'>Rp -</span>
            <div className='clearfix' />
            <div className='my-4' style={{ borderBottom: '1px solid #ddd' }} />
            <span className='text-black text-hel-bold text-m'>Total Price</span><span className='float-right text-black text-os-reg text-l'>Rp {this.renderTotalPrice()}</span>
            <div className='clearfix' />
            <div className='text-yellow text-s float-right' style={{ cursor: 'pointer' }} onMouseDown={this.onUseCouponClicked}>Use Coupon Code</div>
            <div className='clearfix' />
            <Button className='mt-4' block={true} onMouseDown={this.onPayClicked}>Pay</Button>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col xs='6'>
            <h5>My Cart</h5>
            <Table>
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
            <p className='float-right text-hel-95 text-ml'>Total <span className='text-hel-reg text-l'>Rp {this.renderTotalPrice()}</span></p>
            <div className='clearfix' />
          </Col>
        </Row>
        {this.renderModalCoupon()}
      </>
    )
  }
}

const mapStateToProps = ({ user, cartcheckout, rajaongkir }: any) => {
  const { profile } = user
  const { allPickupMethod, dataProduct, dataTrip } = cartcheckout
  const { provinces, cities, deliveryCost } = rajaongkir

  return {
    profile,
    allPickupMethod,
    dataProduct,
    dataTrip,
    provinces,
    cities,
    cartcheckout,
    deliveryCost
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
  resetData
})(Checkout)
