import React, { Component } from 'react'
import _ from 'lodash'
import { Col, Row, FormGroup, Input, Button, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Modal, ModalHeader, ModalBody, Form, Label } from 'reactstrap'
import { Link } from 'routes'

interface StateProps {
  id?: number
}

interface DispatchProps { }

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent {
  activeTab: number
  dropdownOpen: boolean
  modal: boolean
}

class CoffeeTripDetail extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.state = {
      activeTab: 1,
      dropdownOpen: false,
      modal: false
    }
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

  renderReviewList () {
    return _.map(Array(3), (data: any, index: number) => {
      return (
        <>
          <Row>
            <Col xs='12' className='mb-4'>
              <img className='img-round' src='/static/img/test.jpg' />
              <p className='text-hel-bold text-m' style={{ position: 'absolute', top: 0, left: 80 }}>
                Big Smoke<br/>
                <span className='text-s text-hel-reg'>6 August 2018</span>
              </p>
            </Col>
            <Col xs='12'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at sapien sollicitudin, sagittis neque at, sodales libero. Nulla in rutrum odio. Sed in dapibus lorem, a commodo est. Sed eu vehicula leo, in mattis orci. Nam sit amet magna suscipit, mattis erat nec, vulputate mauris. Aliquam pulvinar dolor euismod leo ornare porttitor sit amet et elit. Quisque sit amet semper lacus, ut lobortis nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc varius tempus dui a hendrerit. Suspendisse nec eleifend odio.</p>
            </Col>
          </Row>
        </>
      )
    })
  }

  renderContentDetails () {
    if (this.state.activeTab === 1) {
      return (
        <Table>
          <thead>
            <tr>
              <th className='text-ml text-hel-bold'>Time</th>
              <th className='text-ml text-hel-bold'>Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>08.00</td>
              <td>Lorem Ipsum</td>
            </tr>
            <tr>
              <td>10.00</td>
              <td>Suspendisse</td>
            </tr>
            <tr>
              <td>11.00</td>
              <td>Curabitur</td>
            </tr>
          </tbody>
        </Table>
      )
    } else if (this.state.activeTab === 2) {
      return <p>Suspendisse et venenatis nisi, ut tristique leo. Duis imperdiet, velit non luctus molestie, tellus odio venenatis orci, vitae semper arcu lacus eget urna. Etiam convallis orci eu nisl consequat fringilla. Cras sapien velit, tempus nec erat pellentesque, semper gravida eros. Mauris aliquam augue et mollis dictum. Donec tristique nunc sed nibh tristique, ut consequat magna pretium. Aliquam scelerisque ac ante vel varius. Pellentesque sollicitudin, sapien at laoreet molestie, sem purus egestas orci, nec varius orci velit at ante. Morbi condimentum euismod nisl, eget egestas urna sodales quis. Vivamus ac fermentum mi. Morbi porta vitae lorem ac congue. Nullam accumsan ipsum eget rutrum sagittis. Fusce eu lorem vehicula, lobortis ligula at, sagittis libero. Cras euismod mauris quis ultricies finibus. Sed at ultricies sem, at maximus est.</p>
    } else if (this.state.activeTab === 3) {
      return (
        <div>{this.renderReviewList()}</div>
      )
    }
  }

  renderPhotoList () {
    return _.map(Array(3), (data: any, index: any) => {
      return (
        <Col key={index} xs='4' className='mb-5'>
          <Link route={`/coffee_trip/${index}`} replace={true}>
            <div style={{ backgroundColor: '#333', height: '150px' }} />
          </Link>
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

  render () {
    return (
      <>
        <Row>
          <Col xs='6'>
            <div style={{ backgroundColor: '#333', height: '500px' }} className='mb-4' />
            <Row>
              {this.renderPhotoList()}
            </Row>
          </Col>
          <Col xs={{ size: 5, offset: 1 }}>
            <p className='text-xl text-black text-hel-95'>{`{trip_name}`}</p>
            <p className='text-m text-black text-hel-reg'>{`{trip_description}`}</p>
            <p className='text-m text-black text-hel-reg'>{`{trip_location}`}</p>
            <p className='text-m text-black text-hel-reg'>{`{trip_date}`}</p>
            <p className='text-m text-black text-hel-reg'>{`{trip_provide}`}</p>
            <Row>
              <Col xs='6'>
                <FormGroup>
                  <Input type='select' id='group_size'>
                    <option defaultChecked={true}>Group Size</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col xs='6'>
                <Button block={true} onMouseDown={this.toggleModal}>See Dates</Button>
              </Col>
            </Row>
            <p className='text-l text-black text-hel-95'>IDR 50000 <span className='text-s text-black text-hel-reg'> /person</span></p>
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
          <Col xs='12'>
            {this.renderContentDetails()}
          </Col>
        </Row>
        {this.renderModalDates()}
      </>
    )
  }
}

export default CoffeeTripDetail
