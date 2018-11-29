import React, { Component, FormEvent, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Table, Row, Col, Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, Form } from 'reactstrap'
import { Link } from 'routes'
import { updateCouponCode, getAllCart } from 'actions/index'

interface StateProps {
  dataProduct: any
  dataTrip: any
  shop: any
}

interface DispatchProps {
  updateCouponCode: typeof updateCouponCode
  getAllCart: typeof getAllCart
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  modal: boolean
  totalPrice: number
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

class Cart extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.state = { modal: false, totalPrice: 0 }

    this.onUseCouponMouseDowned = this.onUseCouponMouseDowned.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.onCouponSubmit = this.onCouponSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  componentDidMount () {
    this.props.getAllCart()

  }

  componentDidUpdate () {
    const { dataProduct, dataTrip } = this.props
    const totalPriceTrip = _.map(dataTrip, (data: any) => data.price).reduce((a: number, b: number) => a + b, 0)
    const totalPriceProduct = _.map(dataProduct, (data: any) => data.total_price).reduce((a: number, b: number) => a + b, 0)
    let totalPrice = totalPriceProduct + totalPriceTrip
    if (this.state.totalPrice !== totalPrice) {
      this.setState({ totalPrice })
    }
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

  dataTripCart () {
    const { dataTrip } = this.props
    return _.map(dataTrip, (data: any, index: number) => {
      let arrDate = data.trip_date.substring(0, 10).split('-')
      let date = `${arrDate[2]} ${arrMonth[Number(arrDate[1])]} ${arrDate[0]}`
      console.log(data)
      return (
        <tr key={index}>
          <td>
            <img className='img-fluid mr-3' src={data.photo} width='80' />
            <span className='text-os-reg text-ml text-black-light'>{`${data.title} (${date} : ${data.duration_in_days} ${data.duration_in_days > 1 ? 'days' : 'day'})`}</span>
          </td>
          <td style={{ paddingTop: '38px' }} className='text-os-reg text-ml text-black-light'>Rp {data.price}</td>
          <td style={{ paddingTop: '38px' }} className='text-os-reg text-ml text-black-light'>{data.quantity}</td>
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
          <td style={{ paddingTop: '38px' }} className='text-os-reg text-ml text-black-light'>Rp {data.price}</td>
          <td style={{ paddingTop: '38px' }} className='text-os-reg text-ml text-black-light'>{data.quantity}</td>
          <td style={{ paddingTop: '38px' }} className='text-os-reg text-ml text-black-light'>Rp {data.total_price}</td>
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
                {this.dataTripCart()}
                {this.dataProductCart()}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col className='text-right'>
            <span className='float-right mr-5 text-black-light text-xl'>
              Rp {this.state.totalPrice}
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

const mapStateToProps = ({ cartcheckout, shop }: any) => {
  const { dataProduct, dataTrip } = cartcheckout
  return { dataProduct, dataTrip, shop }
}

export default connect(mapStateToProps, { updateCouponCode, getAllCart })(Cart)
