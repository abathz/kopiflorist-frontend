import React, { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Row, Col, Table, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap'
import {
  updateDataTrip,
  addDataGuest,
  removeDataGuest,
  getTrip,
  getAllProduct,
  incrementQuantity,
  decrementQuantity,
  orderTrip,
  getTripPackage
} from 'actions'

interface StateProps {
  id: any
  trip: any
  tripDetail: any
  allProduct: any
  shop: any
  tripPackage: any
}

interface DispatchProps {
  getTrip: typeof getTrip
  updateDataTrip: typeof updateDataTrip
  addDataGuest: typeof addDataGuest
  removeDataGuest: typeof removeDataGuest
  getAllProduct: typeof getAllProduct
  incrementQuantity: typeof incrementQuantity
  decrementQuantity: typeof decrementQuantity
  orderTrip: typeof orderTrip
  getTripPackage: typeof getTripPackage
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  form: boolean
  alert: boolean
  priceTrip: number
}

class GuestListAddOns extends Component<PropsComponent, StateComponent> {
  constructor (props: PropsComponent) {
    super(props)

    this.state = {
      form: false,
      alert: false,
      priceTrip: 0
    }
  }

  componentDidMount () {
    const { id } = this.props
    const groupSize: string | null = localStorage.getItem('group_size')
    const priceTrip: string | null = localStorage.getItem('price_trip')
    this.setState({ priceTrip: Number(priceTrip) })

    this.props.getTrip(id)
    this.props.getTripPackage(Number(groupSize))
    this.props.getAllProduct()
  }

  toggleForm = () => {
    this.setState((prevState) => ({
      form: !prevState.form
    }))
  }

  onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.updateDataTrip({ prop: e.target.id, value: e.target.value })
  }

  onSaveGuestClicked = () => {
    const { trip } = this.props
    let data = {
      name: trip.name,
      email: trip.email,
      food_preference: trip.food_preference,
      age: trip.age,
      phone: trip.phone
    }

    this.props.addDataGuest(data)
    this.toggleForm()
  }

  onRemoveGuestClicked = (id: number) => () => {
    this.props.removeDataGuest(id)
  }

  onContinueToCartClicked = () => {
    const { shop, trip, allProduct, tripPackage } = this.props
    // tslint:disable-next-line:no-empty
    if (tripPackage.max_participant === 1) {
    } else if (tripPackage.min_participant < trip.guestList.length) {
      this.setState((prevState) => ({
        alert: !prevState.alert
      }))
      return
    }
    const productAddOns = _.map(allProduct, (data: any, index: number) => {
      return {
        id: data.id,
        quantity: shop.addOns[index].quantity
      }
    })

    let data = {
      trip_days_id: trip.tripDetail.trip_days_id,
      trip_allowed_package_id: trip.tripDetail.trip_package[tripPackage.id - 1].trip_package_id === tripPackage.id ? trip.tripDetail.trip_package[tripPackage.id - 1].id : null,
      guest_list: trip.guestList,
      productAddOns
    }

    this.props.orderTrip(data)
  }

  totalAddOns () {
    const { allProduct, shop } = this.props
    let res: number = 0

    let totalProductAddOns: number = _.map(allProduct, (data: any, index: number) => data.price * shop.addOns[index].quantity).reduce((a: number, b: number) => a + b, 0)
    res += totalProductAddOns

    return res
  }

  totalPrice () {
    const { allProduct, shop } = this.props
    let res: number = 0
    res += this.state.priceTrip

    let totalPrice: number = _.map(allProduct, (data: any, index: number) => data.price * shop.addOns[index].quantity).reduce((a: number, b: number) => a + b, 0)
    res += totalPrice

    return res
  }

  incrementQuantity (id: number) {
    this.props.incrementQuantity(id)
    this.props.updateDataTrip({ prop: 'total_price', value: this.totalPrice() })
  }

  decrementQuantity (id: number) {
    this.props.decrementQuantity(id)
    this.props.updateDataTrip({ prop: 'total_price', value: this.totalPrice() })
  }

  renderFormGuest () {
    if (!this.state.form) return <div />
    return (
      <>
        <div className='mb-3' style={{ borderBottom: '1px solid #ddd' }} />
        <Row>
          <Col xs='6'>
            <Form>
              <FormGroup>
                <Label for='name'>Guest Name</Label>
                <Input type='text' id='name' onChange={this.onInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for='email'>Email</Label>
                <Input type='text' id='email' onChange={this.onInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for='food_preference'>Meal Preference</Label>
                <Input type='select' id='food_preference' onChange={this.onInputChange}>
                  <option defaultChecked={true}>{}</option>
                  <option value='vegetable'>Vegetable</option>
                  <option value='meat'>Meat</option>
                </Input>
              </FormGroup>
            </Form>
          </Col>
          <Col xs='6'>
            <Form>
              <FormGroup>
                <Label for='age'>Age</Label>
                <Input type='tel' id='age' onChange={this.onInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for='phone'>Phone</Label>
                <Input type='tel' id='phone' onChange={this.onInputChange} />
              </FormGroup>
            </Form>
          </Col>
          <Col xs='12' className='mb-4'>
            <Button block={true} className='button-yellow' onMouseDown={this.onSaveGuestClicked}>Add</Button>
          </Col>
        </Row>
      </>
    )
  }

  renderDataGuest () {
    const { trip } = this.props
    return _.map(trip.guestList, (data: any, index: number) => {
      return (
        <tr key={index}>
          <td>{data.name}</td>
          <td>{data.food_preference.charAt(0).toUpperCase() + data.food_preference.slice(1)}</td>
          <td><Button color='danger' onMouseDown={this.onRemoveGuestClicked(index)}>Remove</Button></td>
        </tr>
      )
    })
  }

  renderDataProduct () {
    const { allProduct, shop } = this.props
    return _.map(allProduct, (data: any, index: number) => {
      if (!data.availability) return ''
      return (
        <Col key={index} lg='4' xs='6'>
          <img className='img-fluid' src={data.photo} alt=''/>
          <p>{data.name}</p>
          <p className='text-m text-hel-95'>Stock: {data.quantity}</p>
          <p>Rp {data.price}</p>
          <Row>
            <Col xs='12'>
              <div className='d-inline-block px-3 py-1 text-white decrement' onMouseDown={this.decrementQuantity.bind(this, index)}>-</div>
              <div className='d-inline-block py-1 text-center quantity'>{shop.addOns[index].quantity}</div>
              <div className='d-inline-block px-3 py-1 text-white increment' onMouseDown={this.incrementQuantity.bind(this, index)}>+</div>
            </Col>
          </Row>
        </Col>
      )
    })
  }

  renderGuestAddons () {
    const { tripPackage, trip } = this.props

    if (tripPackage.min_participant === tripPackage.max_participant) {
      return (
        <Col xs='12'>
          <Row>
            {this.renderDataProduct()}
          </Row>
        </Col>
      )
    }
    return (
      <>
        <FormGroup>
          <Input type='select' id='guest_list' onChange={this.onInputChange}>
            <option defaultChecked={true}>Group Size</option>
            {_.map(Array((tripPackage.max_participant - tripPackage.min_participant) + 1), (data: any, index: number) => {
              let size = index + tripPackage.min_participant
              return <option key={index} value={size}>{size}</option>
            })}
          </Input>
        </FormGroup>
        <Table responsive={true}>
          <thead>
            <tr>
              <th>Guest Name</th>
              <th>Preference</th>
              <th>{''}</th>
            </tr>
          </thead>
          <tbody>
            {this.renderDataGuest()}
          </tbody>
        </Table>
        {this.renderFormGuest()}
        {trip.guestList.length !== Number(trip.guest_list) ? <Button onMouseDown={this.toggleForm}>{this.state.form ? 'Cancel' : 'Add'}</Button> : ''}
      </>
    )
  }

  render () {
    const { tripDetail, tripPackage, shop } = this.props
    return (
      <>
        {this.state.alert ? <Alert color='danger'>Min. {`${tripPackage.min_participant} guests`}</Alert> : ''}
        <Row>
          <Col xs='12'>
            <h1 className='text-hel-95 text-black text-xl'>{`${tripPackage.min_participant === tripPackage.max_participant ? 'Add-ons' : 'Guest List & add-ons' }`}</h1>
          </Col>
        </Row>
        <Row>
          <Col lg='6' className='mb-5'>
            {this.renderGuestAddons()}
            {tripPackage.min_participant === tripPackage.max_participant ? ''
              : <Col xs='12' className='mt-5'>
                <Row>
                  {this.renderDataProduct()}
                </Row>
              </Col>
            }
          </Col>
          <Col lg={{ size: 5, offset: 1 }} xs='12'>
            <span className='text-black text-hel-reg text-m'>{tripDetail.title}</span><span className='float-right text-black text-os-reg text-m'>
              Rp {this.state.priceTrip || 0}
            </span>
            <div className='clearfix'/>
            {this.totalAddOns() === 0 ? <div/>
            : <>
                <p className='text-black text-hel-reg text-m mt-4 mb-0'>(Add-ons)</p>
                {
                  _.map(shop.addOns, (data: any, index: number) => {
                    return (
                      <p key={index} className='mb-1'><span className='text-black text-hel-reg text-m'>{data.name} x{data.quantity}</span><span className='float-right text-black text-os-reg text-m'>Rp {data.quantity * data.price}</span></p>
                    )
                  })
                }
                <div className='clearfix' />
              </>
            }
            <div className='my-4' style={{ borderBottom: '1px solid #ddd' }} />
            <span className='text-black text-hel-bold text-m'>Total Price</span><span className='float-right text-black text-os-reg text-l'>Rp {this.totalPrice()}</span>
            <div className='clearfix' />
            <Button className='mt-4 button-yellow' block={true} onMouseDown={this.onContinueToCartClicked}>Continue to cart</Button>
          </Col>
        </Row>
      </>
    )
  }
}

const mapStateToProps = ({ trip, shop }: any) => {
  const { tripDetail, tripPackage } = trip
  const { allProduct } = shop

  return { trip, shop, tripDetail, tripPackage, allProduct }
}

export default connect(mapStateToProps, {
  updateDataTrip,
  addDataGuest,
  removeDataGuest,
  getTrip,
  getAllProduct,
  incrementQuantity,
  decrementQuantity,
  orderTrip,
  getTripPackage
})(GuestListAddOns)
