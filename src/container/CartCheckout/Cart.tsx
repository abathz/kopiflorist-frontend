import React, { Component, FormEvent, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { Table, Row, Col, Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, Form } from 'reactstrap'
import { Link } from 'routes'
import { updateCouponCode } from 'actions/index'

interface StateProps {
  cartcheckout: any
}

interface DispatchProps {
  updateCouponCode: typeof updateCouponCode
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  modal: boolean
}

class Cart extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.state = { modal: false }

    this.onUseCouponMouseDowned = this.onUseCouponMouseDowned.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.onCouponSubmit = this.onCouponSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  toggleModal () {
    this.setState((prevState) => ({
      modal: !prevState.modal
    }))
  }

  onInputChange (e: ChangeEvent<HTMLInputElement>) {
    this.props.updateCouponCode(e.target.value)
  }

  onUseCouponMouseDowned () {
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

  renderModalCoupon () {
    return (
      <Modal style={{ marginTop: '200px' }} isOpen={this.state.modal} toggle={this.toggleModal}>
        <ModalHeader>Insert Code</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onCouponSubmit}>
            <FormGroup>
              <Label>Coupon Code</Label>
              <Input onChange={this.onInputChange} />
            </FormGroup>
            <Button className='float-right' style={{ width: '150px' }}>Apply</Button>
            <div className='clearfix'/>
          </Form>
        </ModalBody>
      </Modal>
    )
  }

  render () {
    console.log(this.props.cartcheckout)
    return (
      <>
        <Row>
          <Col>
            <p className='text-hel-95 text-xl'>My Cart</p>
            <Table>
              <thead>
                <tr>
                  <th>Activity/Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img className='img-fluid mr-3' src='static/img/logo.png' width='80' />
                    Ciwidey Coffee trip
                  </td>
                  <td>Rp 500000</td>
                  <td>5 Guest (Small Group)</td>
                  <td>Rp 2500000</td>
                </tr>
                <tr>
                  <td>
                    <img className='img-fluid mr-3' src='static/img/logo.png' width='80' />
                    Ciwidey Coffee trip
                  </td>
                  <td>Rp 500000</td>
                  <td>5 Guest (Small Group)</td>
                  <td>Rp 2500000</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col className='text-right'>
            <span className='float-right mr-5 text-black-light text-xl'>
              5000000
              <div className='text-yellow text-s' onMouseDown={this.onUseCouponMouseDowned}>Use Coupon Code</div>
            </span>
            <p className='float-right mr-5 pt-3 text-hel-95 text-l text-black'>Sub Total</p>
            <div className='clearfix'/>
          </Col>
        </Row>
        <Row>
          <Col className='text-right'>
            <Link route='home'><Button>Continue Shopping</Button></Link>
            <Link route='#'><Button className='mx-5' style={{ width: '160px' }}>Checkout</Button></Link>
          </Col>
        </Row>
        {this.renderModalCoupon()}
      </>
    )
  }
}

const mapStateToProps = ({ cartcheckout }: any) => {
  return { cartcheckout }
}

export default connect(mapStateToProps, { updateCouponCode })(Cart)
