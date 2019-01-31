import React, { Component, ChangeEvent, FormEvent } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, ListGroup, ListGroupItem, Form, FormGroup, Label, Input } from 'reactstrap'
import _ from 'lodash'
import { Link } from 'routes'
import {
  getProfile,
  getUserAddresses,
  getAllProvince,
  getAllCities,
  updateDataProfile,
  createAddress
} from 'actions/index'

interface StateProps {
  user: any
  profile: any
  provinces: any
  cities: any
}

interface DispatchProps {
  getProfile: typeof getProfile
  getUserAddresses: typeof getUserAddresses
  getAllProvince: typeof getAllProvince
  getAllCities: typeof getAllCities
  updateDataProfile: typeof updateDataProfile
  createAddress: typeof createAddress
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  isFormShow: boolean
  active: string
}

class MyAccount extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.state = {
      isFormShow: false,
      active: ''
    }
  }

  componentDidMount () {
    this.setState({ active: window.location.pathname })
    this.props.getProfile()
    this.props.getUserAddresses()
  }

  onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'province') {
      let province: any[] = _.filter(this.props.provinces, (data: any) => {
        if (data.province_id === e.target.value) return data
      })
      this.props.getAllCities(Number(province[0].province_id))
      this.props.updateDataProfile({ prop: 'province_id', value: Number(province[0].province_id) })
      this.props.updateDataProfile({ prop: 'postal_code', value: 0 })
    }
    if (e.target.id === 'city') {
      let city: any[] = _.filter(this.props.cities, (data: any) => {
        if (data.city_id === e.target.value) return data
      })
      this.props.updateDataProfile({ prop: 'city_id', value: Number(city[0].city_id) })
    }
    if (e.target.id === 'address' || e.target.id === 'postal_code') {
      this.props.updateDataProfile({ prop: e.target.id, value: e.target.value })
    }
  }

  onAddAddressClicked = () => {
    this.setState(prevState => ({ isFormShow: !prevState.isFormShow }))
    this.props.getAllProvince()
  }

  onAddressSubmit = (e: FormEvent) => {
    e.preventDefault()

    let { user } = this.props
    let data = {
      address: user.address,
      postal_code: user.postal_code,
      city_id: user.city_id,
      province_id: user.province_id
    }
    this.props.createAddress(data)
  }

  listUserAddress () {
    const { profile } = this.props
    return _.map(profile.address, (data: any, index: number) => {
      return (
        <>
          <ListGroupItem key={index} className='text-ml text-os-reg text-black-light'>{`${data.address}, ${data.city}, ${data.province}, ${data.postal_code}`}</ListGroupItem>
        </>
      )
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
      return <option key={index} value={data.city_id}>{data.type} {data.city_name}</option>
    })
  }

  renderFormAddress () {
    return (
      <Form onSubmit={this.onAddressSubmit} className='mt-3'>
        <Row>
          <Col xs='6'>
            <FormGroup>
              <Label for='address'>Address</Label>
              <Input type='text' id='address' onChange={this.onInputChange} />
            </FormGroup>
          </Col>
          <Col xs='6'>
            <FormGroup>
              <Label for='province'>Province</Label>
              <Input type='select' id='province' onChange={this.onInputChange}>
                <option defaultChecked={true}>{}</option>
                {this.renderProvinces()}
              </Input>
            </FormGroup>
          </Col>
          <Col xs='6'>
            <FormGroup>
              <Label for='city'>City</Label>
              <Input type='select' id='city' onChange={this.onInputChange}>
                <option defaultChecked={true}>{}</option>
                {this.renderCities()}
              </Input>
            </FormGroup>
          </Col>
          <Col xs='6'>
            <FormGroup>
              <Label for='postal_code'>Postal Code</Label>
              <Input type='number' id='postal_code' onChange={this.onInputChange} />
            </FormGroup>
          </Col>
        </Row>
        <Button className='button-yellow'>Add</Button>
      </Form>
    )
  }

  render () {
    const { profile } = this.props
    return (
      <>
        <Row>
          <Col xs='10'>
            <h1 className='text-reg-95 text-black text-xl'>My Account</h1>
          </Col>
          <Col xs='2'>
            <Link route='editprofile'><Button className='button-yellow'>Edit Profile</Button></Link>
          </Col>
        </Row>
        <Row>
          <Col xs='3'>
            <ul className='list-profile'>
              <Link route='profile'><li className={this.state.active.includes('/profile') ? 'text-yellow' : ''}>Account</li></Link>
              <Link route='orderhistory'><li className={this.state.active.includes('/order_history') ? 'text-yellow' : ''}>Order History</li></Link>
            </ul>
          </Col>
          <Col xs='5'>
            <span className='text-m text-hel-reg'>Name</span>
            <p className='text-ml text-os-reg text-black-light'>{profile.name}</p>
            <span className='text-m text-hel-reg'>Email</span>
            <p className='text-ml text-os-reg text-black-light'>{profile.email}</p>
            <span className='text-m text-hel-reg'>Phone</span>
            <p className='text-ml text-os-reg text-black-light'>{profile.phone}</p>
            <span className='text-m text-hel-reg'>Address</span>
            <ListGroup>
              {this.listUserAddress()}
            </ListGroup>
            <Button className='text-s text-os-reg mt-2 button-yellow' onMouseDown={this.onAddAddressClicked}>{this.state.isFormShow ? 'Cancel' : '+ Add Address'}</Button>
            {this.state.isFormShow ? this.renderFormAddress() : <div/>}
          </Col>
        </Row>
      </>
    )
  }
}

const mapStateToProps = ({ user, rajaongkir }: any) => {
  const { profile } = user
  const { provinces, cities } = rajaongkir

  return { user, profile, provinces, cities }
}

export default connect(mapStateToProps, {
  getProfile,
  getUserAddresses,
  getAllProvince,
  getAllCities,
  updateDataProfile,
  createAddress
})(MyAccount)
