import React, { Component, ChangeEvent, createRef } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import moment from 'moment'
import { Col, Row, FormGroup, Input, Button, Nav, NavItem, NavLink, Table, Alert } from 'reactstrap'
import { Router } from 'routes'
import { getTrip, updateDataTrip, getTripReviews } from 'actions'
import ModalAuth from 'container/Common/ModalAuth'

interface StateProps {
  id: number
  tripDetail: any
  tripReviews: any
  trip: any
}

interface DispatchProps {
  getTrip: typeof getTrip
  updateDataTrip: typeof updateDataTrip
  getTripReviews: typeof getTripReviews
}

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent {
  activeTab: number
  dropdownOpen: boolean
  modal: boolean
  mainPhoto: string
  selectedPhoto: string
  errorMessage: string
}

class CoffeeTripDetail extends Component<PropsComponent, StateComponent> {
  private img: any = createRef<HTMLImageElement>()

  constructor (props: PropsComponent) {
    super(props)

    this.state = {
      activeTab: 1,
      dropdownOpen: false,
      modal: false,
      mainPhoto: '',
      selectedPhoto: '',
      errorMessage: ''
    }
  }

  componentDidMount () {
    this.props.getTrip(this.props.id)
    this.props.getTripReviews(this.props.id)
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal
    }))
  }

  onDetailsTripClicked = (value: number) => {
    if (this.state.activeTab !== value) {
      this.setState({
        activeTab: value
      })
    }
  }

  onOrderClicked = () => {
    const token: string | null = localStorage.getItem('token')
    const isTripPackageChosen: boolean = localStorage.getItem('group_size') !== null ? true : false
    const { tripDetail } = this.props

    if (!token) {
      this.toggleModal()
    } else {
      if (isTripPackageChosen) {
        Router.pushRoute(`/coffee_trip/${tripDetail.id}/order`)
      } else {
        this.setState({ errorMessage: 'Choose group size!' })
      }
    }
  }

  onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'group_size') {
      let idTripPackage = e.target.value.split('-')[0]
      let priceTripPackage = e.target.value.split('-')[1]
      localStorage.setItem('group_size', idTripPackage)
      localStorage.setItem('price_trip', priceTripPackage)
      this.props.updateDataTrip({ prop: 'price', value: priceTripPackage })
      return
    }
    this.props.updateDataTrip({ prop: e.target.id, value: e.target.value })
  }

  changeInitialPhoto = (e: any) => {
    let img: any = this.img.current.currentSrc
    this.props.updateDataTrip({ prop: `main_photo`, value: e.target.src })
    this.props.updateDataTrip({ prop: `other_photo`, value: { id: e.target.id, img } })
  }

  renderReviewList () {
    const { tripReviews } = this.props
    return _.map(tripReviews, (data: any, index: number) => {
      let date = moment(data.createdAt).format('DD MMMM YYYY')
      let time = moment(data.createdAt).format('HH:SS')
      return (
        <div key={index}>
          <Col xs='12' className='mb-4'>
            <img className='img-round' src='/static/img/person.png' />
            <p className='text-hel-bold text-m' style={{ position: 'absolute', top: 0, left: 80, width: '100%' }}>
              {data.user.name}<br />
              <span className='text-s text-hel-reg'>{date} {time}</span>
            </p>
          </Col>
          <Col xs='12' className='mb-5'>
            <p>{data.message}</p>
          </Col>
        </div>
      )
    })
  }

  sortItinerary () {
    const { tripDetail } = this.props
    return _.countBy(tripDetail.itinerary, (data: any) => {
      switch (data.day) {
        case 1: return 1
        case 2: return 2
        case 3: return 3
        case 4: return 4
        default: return ''
      }
    })
  }

  renderContentDetails () {
    const { tripDetail } = this.props
    let arrItinerary: any[] = []
    const arrDayItinerary = this.sortItinerary()
    const day = Object.keys(arrDayItinerary)

    _.map(day, (n) => {
      arrItinerary[Number(n) - 1] = []
    })

    _.map(tripDetail.itinerary, (itinerary) => {
      arrItinerary[Number(itinerary.day) - 1].push(itinerary)
    })

    if (this.state.activeTab === 1) {
      return _.map(arrItinerary, (data: any, index: number) => {
        return (
          <Col xs='12' key={index}>
            <h3>Day {index + 1}</h3>
            <Table responsive={true}>
              <thead>
                <tr>
                  <th className='text-ml text-hel-bold'>Time</th>
                  <th className='text-ml text-hel-bold'>Activity</th>
                </tr>
              </thead>
              <tbody>
                {_.map(data, (itinerary: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td style={{ width: '40%' }}>{itinerary.time}</td>
                      <td>{itinerary.activity}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Col>
        )
      })
    } else if (this.state.activeTab === 2) {
      return <p>{tripDetail.description}</p>
    } else if (this.state.activeTab === 3) {
      return (
        <div>{this.renderReviewList()}</div>
      )
    }
  }

  renderPhotoList () {
    const { trip } = this.props
    return _.map(trip.other_photo, (data: any, index: any) => {
      return (
        <Col key={index} xs='4' className='mb-5'>
          <img id={index} className='img-fluid' style={{ cursor: 'pointer' }} src={data} onMouseDown={this.changeInitialPhoto}/>
        </Col>
      )
    })
  }

  renderGroupSize () {
    const { tripDetail } = this.props
    return _.map(tripDetail.trip_package, (data: any, index: number) => {
      let realPrice = tripDetail.discount > 0 ? data.price_discount : data.price
      return (
        <option key={data.id} id={data.package_name} value={`${data.trip_package_id}-${realPrice}`}>
          {`
            ${data.package_name}
            ${data.max_participant === data.min_participant
              ? `(${data.min_participant} person)`
              : `(${data.min_participant}-${data.max_participant} persons)`
            }
          `}
        </option>
      )
    })
  }

  tripDate () {
    const { tripDetail } = this.props
    const date = `${tripDetail.trip_date}`.substring(0, 10)
    const startDate = moment(date).format('DD MMMM YYYY')
    const endDate = moment(date).add(tripDetail.duration - 1, 'd').format('DD MMMM YYYY')
    return tripDetail.duration !== 1 ? `${startDate} - ${endDate}` : startDate
  }

  render () {
    const { tripDetail, trip } = this.props
    return (
      <>
        <Row className='mb-5'>
          <Col lg='6' xs='12'>
            <img className='img-fluid mb-4' src={trip.main_photo} alt='' ref={this.img}/>
            <Row>
              {this.renderPhotoList()}
            </Row>
          </Col>
          <Col lg={{ size: 5, offset: 1 }} xs='12'>
            <span className='text-xl text-black text-hel-95'>{tripDetail.title}</span>
            {tripDetail.discount > 0 &&
              <div className='discount-badge mb-4'>
              {tripDetail.discount} % Off
              </div>
            }
            <p className='text-m text-black text-hel-reg'>{tripDetail.description}</p>
            <p className='text-m text-black text-hel-reg'>{tripDetail.address}</p>
            <p className='text-m text-black text-hel-reg'>{this.tripDate()}</p>
            <p className='text-m text-black text-hel-reg'>{tripDetail.notes}</p>
            <Row>
              <Col xs='6'>
                <FormGroup>
                  <Input type='select' id='group_size' onChange={this.onInputChange}>
                    <option defaultChecked={true}>Group Size</option>
                    {this.renderGroupSize()}
                  </Input>
                </FormGroup>
              </Col>
              <Col xs='6'>
                <p className='text-l text-black text-hel-95 pt-2'>IDR {trip.price} <span className='text-s text-black text-hel-reg'> /package</span></p>
              </Col>
            </Row>
            <Row>
              <Col xs='12'>
                {this.state.errorMessage !== '' ? <Alert color='danger'>{this.state.errorMessage}</Alert> : ''}
                <Button className='button-yellow' block={true} onMouseDown={this.onOrderClicked}>Order</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Nav className='mb-4' tabs={true}>
              <NavItem className=''>
                <NavLink href='#' className='px-5 text-black text-hel-95' active={this.state.activeTab === 1} onMouseDown={this.onDetailsTripClicked.bind(this, 1)}>Itinerary</NavLink>
              </NavItem>
              <NavItem className=''>
                <NavLink href='#' className='px-5 text-black text-hel-95' active={this.state.activeTab === 2} onMouseDown={this.onDetailsTripClicked.bind(this, 2)}>Detail</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#' className='px-5 text-black text-hel-95' active={this.state.activeTab === 3} onMouseDown={this.onDetailsTripClicked.bind(this, 3)}>Review</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <Row>
          {this.renderContentDetails()}
        </Row>
        <ModalAuth modal={this.state.modal} toggleModal={this.toggleModal} />
        {/* {this.renderModalDates()} */}
      </>
    )
  }
}

const mapStateToProps = ({ trip }: any) => {
  const { tripDetail, tripReviews } = trip

  return { tripDetail, tripReviews, trip }
}

export default connect(mapStateToProps, { getTrip, updateDataTrip, getTripReviews })(CoffeeTripDetail)
