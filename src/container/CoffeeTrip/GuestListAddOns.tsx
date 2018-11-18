import React, { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'routes'
import { Row, Col, Table, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { updateDataTrip, addDataGuest } from 'actions/index'

interface StateProps {
  trip: any
}

interface DispatchProps {
  updateDataTrip: typeof updateDataTrip
  addDataGuest: typeof addDataGuest
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  form: boolean
}

class GuestListAddOns extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.state = { form: false }
    this.toggleForm = this.toggleForm.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onSaveGuestClicked = this.onSaveGuestClicked.bind(this)
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
      guest_name: trip.guest_name,
      email: trip.email,
      meal_preference: trip.meal_preference,
      age: trip.age,
      phone: trip.phone
    }

    this.props.addDataGuest(data)
    this.toggleForm()
  }

  renderFormGuest () {
    if (!this.state.form) return <div/>
    return (
      <>
        <div className='mb-3' style={{ borderBottom: '1px solid #ddd' }} />
        <Row>
          <Col xs='6'>
            <Form>
              <FormGroup>
                <Label for='guest_name'>Guest Name</Label>
                <Input type='text' id='guest_name' onChange={this.onInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for='email'>Email</Label>
                <Input type='text' id='email' onChange={this.onInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for='meal_preference'>Meal Preference</Label>
                <Input type='select' id='meal_preference' onChange={this.onInputChange}>
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
          <td>{data.guest_name}</td>
          <td>{data.meal_preference.charAt(0).toUpperCase() + data.meal_preference.slice(1)}</td>
          <td>remove</td>
        </tr>
      )
    })
  }

  render () {
    console.log(this.props.trip)
    return (
      <>
        <Row>
          <Col xs='12'>
            <h1 className='text-hel-95 text-black text-xl'>Guest List & Add-ons</h1>
          </Col>
        </Row>
        <Row>
          <Col xs='7'>
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
            <Button onMouseDown={this.toggleForm}>{this.state.form ? 'Cancel' : 'Add'}</Button>
          </Col>
          <Col xs={{ size: 4, offset: 1 }}>
            <span className='text-black text-hel-reg text-m'>Total Price</span><span className='float-right text-black text-os-reg text-m'>Rp 450000</span>
            <div className='clearfix'/>
            <span className='text-black text-hel-reg text-m'>Total Price</span><span className='float-right text-black text-os-reg text-m'>Rp 450000</span>
            <div className='clearfix' />
            <div className='my-4' style={{ borderBottom: '1px solid #ddd' }} />
            <span className='text-black text-hel-bold text-m'>Total Price</span><span className='float-right text-black text-os-reg text-l'>Rp 450000</span>
            <div className='clearfix' />
            <Link route='cart'><Button className='mt-4' block={true}>Continue to cart</Button></Link>
          </Col>
        </Row>
      </>
    )
  }
}

const mapStateToProps = ({ trip }: any) => {
  return { trip }
}

export default connect(mapStateToProps, { updateDataTrip, addDataGuest })(GuestListAddOns)
