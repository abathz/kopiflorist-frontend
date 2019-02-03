import React, { Component, ChangeEvent, FormEvent } from 'react'
import { connect } from 'react-redux'
import { FormGroup, Form, Label, Input, Button, ListGroup, ListGroupItem, Row, Col } from 'reactstrap'
import {
  updateDataProfile,
  getProfile,
  editProfile,
  getUserAddresses,
  getAllProvince,
  getAllCities,
  getUserAddress
} from 'actions'
import _ from 'lodash'
import { Link } from 'routes'

interface StateProps {
  user: any
  provinces: any
  cities: any
}

interface DispatchProps {
  updateDataProfile: typeof updateDataProfile
  getProfile: typeof getProfile
  editProfile: typeof editProfile
  getUserAddresses: typeof getUserAddresses
  getAllProvince: typeof getAllProvince
  getAllCities: typeof getAllCities
  getUserAddress: typeof getUserAddress
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  formAddress: boolean
  indexAddress: number
  isLoading: boolean
  active: string
}

class EditProfile extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.state = {
      formAddress: false,
      indexAddress: 0,
      isLoading: false,
      active: ''
    }
  }

  componentDidMount () {
    this.props.getProfile()
    this.props.getUserAddresses()
    this.props.getAllProvince()
    this.setState({ active: window.location.pathname })
  }

  onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'province') {
      let province: any[] = _.filter(this.props.provinces, (data: any) => {
        if (data.province_id === e.target.value) return data
      })
      this.props.getAllCities(Number(province[0].province_id))
      this.props.updateDataProfile({ prop: 'userAddress', value: { indexAddress: this.state.indexAddress, province_id: Number(province[0].province_id), target: { id: e.target.id, value: province[0].province } } })
      this.props.updateDataProfile({ prop: 'postal_code', value: 0 })
    }
    if (e.target.id === 'city') {
      let city: any[] = _.filter(this.props.cities, (data: any) => {
        if (data.city_id === e.target.value) return data
      })
      this.props.updateDataProfile({ prop: 'userAddress', value: { indexAddress: this.state.indexAddress, city_id: Number(city[0].city_id), target: { id: e.target.id, value: `${city[0].type} ${city[0].city_name}` } } })
    }
    if (e.target.id === 'address' || e.target.id === 'postal_code') {
      this.props.updateDataProfile({ prop: 'userAddress', value: { indexAddress: this.state.indexAddress, target: { id: e.target.id, value: e.target.value } } })
    }
    this.props.updateDataProfile({ prop: e.target.id, value: e.target.value })
  }

  onSubmit = (e: FormEvent) => {
    e.preventDefault()
    this.props.editProfile(this.props.user)
  }

  async onAddressClicked (indexAddress: number, idAddress: number) {
    await this.setState({ isLoading: true })
    await this.props.getUserAddress(idAddress)
    await this.props.getAllCities(Number(this.props.user.province_id))
    await this.setState({
      indexAddress,
      formAddress: true
    })
    await this.setState({ isLoading: false })
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
    const { user } = this.props
    if (!this.state.formAddress) return null
    if (this.state.isLoading) return <div>Loading...</div>
    return (
      <Row>
        <Col xs='6'>
          <FormGroup>
            <Label for='address'>Address</Label>
            <Input type='text' id='address' value={user.editedUserAddress[this.state.indexAddress].address} onChange={this.onInputChange} />
          </FormGroup>
        </Col>
        <Col xs='6'>
          <FormGroup>
            <Label for='province'>Province</Label>
            <Input type='select' id='province' value={user.editedUserAddress[this.state.indexAddress].province_id} onChange={this.onInputChange}>
              <option defaultChecked={true}>{}</option>
              {this.renderProvinces()}
            </Input>
          </FormGroup>
        </Col>
        <Col xs='6'>
          <FormGroup>
            <Label for='city'>City</Label>
            <Input type='select' id='city' value={user.editedUserAddress[this.state.indexAddress].city_id} onChange={this.onInputChange}>
              <option defaultChecked={true}>{}</option>
              {this.renderCities()}
            </Input>
          </FormGroup>
        </Col>
        <Col xs='6'>
          <FormGroup>
            <Label for='postal_code'>Postal Code</Label>
            <Input type='number' id='postal_code' value={user.editedUserAddress[this.state.indexAddress].postal_code} onChange={this.onInputChange} />
          </FormGroup>
        </Col>
      </Row>
    )
  }

  render () {
    const { user } = this.props
    return (
      <>
        <Row>
          <Col xs='10'>
            <h1 className='text-hel-95 text-black text-xl'>My Account</h1>
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
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='name'>Name</Label>
                <Input type='text' id='name' value={user.name} onChange={this.onInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for='email'>Email</Label>
                <Input type='text' id='email' value={user.email} onChange={this.onInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for='phone'>Phone</Label>
                <Input type='text' id='phone' value={user.phone} onChange={this.onInputChange} />
              </FormGroup>
              <FormGroup>
                <Label>Address</Label>
                <ListGroup className='mb-4'>
                  <Row>
                    {
                      _.map(this.props.user.userAddresses, (data: any, index: number) => {
                        return (
                          <Col xs='6' key={index} >
                            <ListGroupItem onMouseDown={this.onAddressClicked.bind(this, index, data.id)} className='text-ml text-os-reg text-black-light' style={{ cursor: 'pointer' }}>{`${data.address}, ${data.city}, ${data.province}, ${data.postal_code}`}</ListGroupItem>
                          </Col>
                        )
                      })
                    }
                  </Row>
                </ListGroup>
                {this.renderFormAddress()}
              </FormGroup>
              <Button block={true} className='button-yellow' id='submit'>Save</Button>
            </Form>
          </Col>
        </Row>
      </>
    )
  }
}

const mapStateToProps = ({ user, rajaongkir }: any) => {
  const { provinces, cities } = rajaongkir
  return { user, provinces, cities }
}

export default connect(mapStateToProps, {
  updateDataProfile,
  getProfile,
  editProfile,
  getUserAddresses,
  getAllProvince,
  getAllCities,
  getUserAddress
})(EditProfile)
