import React, { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'routes'
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
} from 'actions/index'

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
}

class GuestListAddOns extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.state = { form: false, alert: false }
    this.toggleForm = this.toggleForm.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onSaveGuestClicked = this.onSaveGuestClicked.bind(this)
    this.onContinueToCartClicked = this.onContinueToCartClicked.bind(this)
  }

  componentDidMount () {
    const { id, trip } = this.props
    this.props.getTrip(id)
    this.props.getTripPackage(trip.group_size)
    this.props.getAllProduct()
  }

  toggleForm () {
    this.setState((prevState) => ({
      form: !prevState.form
    }))
  }

  onInputChange (e: ChangeEvent<HTMLInputElement>) {
    this.props.updateDataTrip({ prop: e.target.id, value: e.target.value })
  }

  onSaveGuestClicked () {
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

  onRemoveGuestClicked (id: number) {
    this.props.removeDataGuest(id)
  }

  onContinueToCartClicked () {
    const { shop, trip, allProduct, tripPackage } = this.props
    if (trip.guestList.length < tripPackage.min_participant) {
      this.setState((prevState) => ({
        alert: !prevState.alert
      }))
      return
    }
    const productAddOns = _.map(allProduct, (data: any, index: number) => {
      return {
        id: data.id,
        quantity: shop.quantityAddOns[index]
      }
    })

    let data = {
      trip_days_id: trip.tripDetail.trip_days_id,
      trip_package_id: trip.group_size,
      guest_list: trip.guestList,
      productAddOns
    }

    this.props.orderTrip(data)
  }

  totalAddOns () {
    const { allProduct, shop } = this.props
    let res: number = 0

    let totalProductAddOns: number = _.map(allProduct, (data: any, index: number) => data.price * shop.quantityAddOns[index]).reduce((a: number, b: number) => a + b, 0)

    res += totalProductAddOns

    return res
  }

  totalPrice () {
    const { tripDetail, allProduct, shop } = this.props
    let res: number = 0
    res += tripDetail.price

    let totalPrice: number = _.map(allProduct, (data: any, index: number) => data.price * shop.quantityAddOns[index]).reduce((a: number, b: number) => a + b, 0)
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
    const { trip } = this.props
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
            <Button block={true} onMouseDown={this.onSaveGuestClicked}>Add</Button>
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
          <td><Button onMouseDown={this.onRemoveGuestClicked.bind(this, index)}>Remove</Button></td>
        </tr>
      )
    })
  }

  renderDataProduct () {
    const { allProduct, shop } = this.props
    return _.map(allProduct, (data: any, index: number) => {
      if (!data.availability) return ''
      return (
        <Col key={index} xs='3'>
          <img className='img-fluid' src={data.photo} alt=''/>
          <p>{data.name}</p>
          <p>Rp {data.price}</p>
          <Row>
            <Col xs='12'>
              <div className='d-inline-block px-3 py-1 text-white decrement' onMouseDown={this.decrementQuantity.bind(this, index)}>-</div>
              <div className='d-inline-block py-1 text-center quantity'>{shop.quantityAddOns[index]}</div>
              <div className='d-inline-block px-3 py-1 text-white increment' onMouseDown={this.incrementQuantity.bind(this, index)}>+</div>
            </Col>
          </Row>
        </Col>
      )
    })
  }

  render () {
    const { tripDetail, tripPackage, trip } = this.props
    return (
      <>
        {this.state.alert ? <Alert color='danger'>Min. {`${tripPackage.min_participant} guests`}</Alert> : ''}
        <Row>
          <Col xs='12'>
            <h1 className='text-hel-95 text-black text-xl'>{`${tripPackage.min_participant === tripPackage.max_participant ? 'Add-ons' : 'Guest List & add-ons' }`}</h1>
          </Col>
        </Row>
        <Row>
          {tripPackage.min_participant === tripPackage.max_participant
            ? <Col xs='7'>
                <Row>
                  {this.renderDataProduct()}
                </Row>
              </Col>
            : <Col xs='7'>
                <Table>
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
              {trip.guestList.length < tripPackage.max_participant ? <Button onMouseDown={this.toggleForm}>{this.state.form ? 'Cancel' : 'Add'}</Button> : ''}
              </Col>
          }
          <Col xs={{ size: 4, offset: 1 }}>
            <span className='text-black text-hel-reg text-m'>Total Price</span><span className='float-right text-black text-os-reg text-m'>Rp {tripDetail.price}</span>
            <div className='clearfix'/>
            {this.totalAddOns() === 0 ? <div/>
            : <>
                <span className='text-black text-hel-reg text-m'>Add-ons</span> <span className='float-right text-black text-os-reg text-m'>Rp {this.totalAddOns()}</span>
                <div className='clearfix' />
              </>
            }
            <div className='my-4' style={{ borderBottom: '1px solid #ddd' }} />
            <span className='text-black text-hel-bold text-m'>Total Price</span><span className='float-right text-black text-os-reg text-l'>Rp {this.totalPrice()}</span>
            <div className='clearfix' />
            {/* <Link route='cart'><Button className='mt-4' block={true} onMouseDown={this.onContinueToCartClicked}>Continue to cart</Button></Link> */}
            <Button className='mt-4' block={true} onMouseDown={this.onContinueToCartClicked}>Continue to cart</Button>
          </Col>
          {tripPackage.min_participant === tripPackage.max_participant ? ''
            : <Col xs='7'>
                <Row>
                  {this.renderDataProduct()}
                </Row>
              </Col>
          }
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
