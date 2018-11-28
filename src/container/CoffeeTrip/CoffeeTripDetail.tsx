import React, { Component, ChangeEvent, MouseEvent, createRef } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import moment from 'moment'
import { Col, Row, FormGroup, Input, Button, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Modal, ModalHeader, ModalBody, Form, Label } from 'reactstrap'
import { Link } from 'routes'
import { getTrip, updateDataTrip } from 'actions/index'

interface StateProps {
  id: number
  tripDetail: any
  trip: any
}

interface DispatchProps {
  getTrip: typeof getTrip
  updateDataTrip: typeof updateDataTrip
}

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent {
  activeTab: number
  dropdownOpen: boolean
  modal: boolean
  mainPhoto: string
  selectedPhoto: string
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

class CoffeeTripDetail extends Component<PropsComponent, StateComponent> {
  private img: any = createRef<HTMLImageElement>()

  constructor (props: any) {
    super(props)

    this.state = {
      activeTab: 1,
      dropdownOpen: false,
      modal: false,
      mainPhoto: '',
      selectedPhoto: ''
    }

    this.toggle = this.toggle.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.changeInitialPhoto = this.changeInitialPhoto.bind(this)
  }

  componentDidMount () {
    this.props.getTrip(this.props.id)
  }

  toggle () {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  toggleModal () {
    this.setState((prevState) => ({
      modal: !prevState.modal
    }))
  }

  onDetailsTripClicked (value: number) {
    if (this.state.activeTab !== value) {
      this.setState({
        activeTab: value
      })
    }
  }

  onInputChange (e: ChangeEvent<HTMLInputElement>) {
    this.props.updateDataTrip({ prop: e.target.id, value: e.target.value })
  }

  changeInitialPhoto (e: any) {
    let img: any = this.img.current.currentSrc
    this.props.updateDataTrip({ prop: `main_photo`, value: e.target.src })
    this.props.updateDataTrip({ prop: `other_photo`, value: { img, id: e.target.id } })
  }

  renderReviewList () {
    return _.map(Array(3), (data: any, index: number) => {
      return (
        <Row key={index}>
          <Col xs='12' className='mb-4'>
            <img className='img-round' src='/static/img/test.jpg' />
            <p className='text-hel-bold text-m' style={{ position: 'absolute', top: 0, left: 80 }}>
              Big Smoke<br />
              <span className='text-s text-hel-reg'>6 August 2018</span>
            </p>
          </Col>
          <Col xs='12'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at sapien sollicitudin, sagittis neque at, sodales libero. Nulla in rutrum odio. Sed in dapibus lorem, a commodo est. Sed eu vehicula leo, in mattis orci. Nam sit amet magna suscipit, mattis erat nec, vulputate mauris. Aliquam pulvinar dolor euismod leo ornare porttitor sit amet et elit. Quisque sit amet semper lacus, ut lobortis nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc varius tempus dui a hendrerit. Suspendisse nec eleifend odio.</p>
          </Col>
        </Row>
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
            <Table>
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

  renderModalDates () {
    return (
      <Modal style={{ marginTop: '200px' }} isOpen={this.state.modal} toggle={this.toggleModal}>
        <ModalHeader>Available Dates</ModalHeader>
        <ModalBody>
          <Row className='scroll-overflow'>
          {_.map(Array(10), (data: any, index: number) => {
            return (
              <Col key={index} xs='12' className='mb-3'>
                <span style={{ verticalAlign: '-7px' }}>25 August 2018 - 27 August 2018</span>
                <Link route={`/coffee_trip/${this.props.id}/order`}><Button className='float-right'>Choose</Button></Link>
              </Col>
            )
          })}
          </Row>
          <div className='clearfix'/>
        </ModalBody>
      </Modal>
    )
  }

  renderGroupSize () {
    const { tripDetail } = this.props
    return _.map(tripDetail.trip_package, (data: any, index: number) => {
      return <option key={data[index].id} value={data[index].id}>{data[index].package_name}</option>
    })
  }

  tripDate () {
    const { tripDetail } = this.props
    const date = `${tripDetail.trip_date}`.substring(0, 10).split('-')
    const startDate = `${date[2]} ${arrMonth[Number(date[1])]} ${date[0]}`
    const endDate = moment(new Date(`${date[0]}-${date[1]}-${date[2]}`)).add(tripDetail.duration - 1, 'd').format('DD MMMM YYYY')
    return `${startDate} - ${endDate}`
  }

  render () {
    const { tripDetail, trip } = this.props
    return (
      <>
        <Row>
          <Col xs='6'>
            <img className='img-fluid mb-4' src={trip.main_photo} alt='' ref={this.img}/>
            <Row>
              {this.renderPhotoList()}
            </Row>
          </Col>
          <Col xs={{ size: 5, offset: 1 }}>
            <p className='text-xl text-black text-hel-95'>{tripDetail.title}</p>
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
                <p className='text-l text-black text-hel-95 pt-2'>IDR {tripDetail.price} <span className='text-s text-black text-hel-reg'> /person</span></p>
              </Col>
            </Row>
            <Row>
              <Col xs='12'>
                <Link route={`/coffee_trip/${tripDetail.id}/order`}><Button block={true}>Order</Button></Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Nav className='mb-4' tabs={true}>
              <NavItem className='mr-5'>
                <NavLink href='#' className='px-5 text-black text-hel-95' active={this.state.activeTab === 1} onMouseDown={this.onDetailsTripClicked.bind(this, 1)}>Itinerary</NavLink>
              </NavItem>
              <NavItem className='mr-5'>
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
        {/* {this.renderModalDates()} */}
      </>
    )
  }
}

const mapStateToProps = ({ trip }: any) => {
  const { tripDetail } = trip

  return { tripDetail, trip }
}

export default connect(mapStateToProps, { getTrip, updateDataTrip })(CoffeeTripDetail)
