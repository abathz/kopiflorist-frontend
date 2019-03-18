import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  UncontrolledCollapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
 } from 'reactstrap'
import { Link } from 'routes'
import ModalAuth from './ModalAuth'
import { getProfile, getInfoMyCart, getUserReviews , logout } from 'actions'
import _ from 'lodash'

interface StateProps {
  profile: any
  myCart: any
  userReviews: any
}

interface DispatchProps {
  getProfile: typeof getProfile
  logout: typeof logout
  getInfoMyCart: typeof getInfoMyCart
  getUserReviews: typeof getUserReviews
}

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent {
  isOpen: boolean
  modal: boolean
  active: string
  token: string
}

class Header extends Component<PropsComponent, StateComponent> {
  constructor (props: PropsComponent) {
    super(props)

    this.state = {
      isOpen: false,
      modal: false,
      active: '',
      token: ''
    }
  }

  componentDidMount () {
    const token: any = localStorage.getItem('token')
    this.setState({
      active: window.location.pathname,
      token
    })
    if (token) {
      this.props.getProfile()
      this.props.getInfoMyCart()
      this.props.getUserReviews()
    }
  }

  logout = () => {
    this.props.logout()
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  calculateUserGetReview = () => {
    const { userReviews } = this.props
    let totalReview = _.reduce(userReviews, (map: any, obj: any) => {
      map['total_review'] = obj.review === null ? ++map['total_review'] || 1 : ''
      return map
    }, {})

    return totalReview.total_review
  }

  renderDropdown () {
    const { profile } = this.props
    if (!profile) return ''
    if (this.state.token) {
      return (
        <UncontrolledDropdown className='ml-auto login' nav={true} inNavbar={true}>
          <DropdownToggle nav={true} caret={true}>
            {profile.name}
          </DropdownToggle>
          <DropdownMenu right={true}>
            <Link route='profile'>
              <DropdownItem>
                My Account
              </DropdownItem>
            </Link>
            <Link route='review'>
              <DropdownItem>
                Review <Badge color='danger' pill={true}>{this.calculateUserGetReview()}</Badge>
              </DropdownItem>
            </Link>
            <DropdownItem divider={true} />
            <DropdownItem onMouseDown={this.logout}>
              Sign Out
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      )
    }
    return (
      <NavItem>
        <NavLink onMouseDown={this.toggleModal}>
          <p>Signin/Signup</p>
        </NavLink>
      </NavItem>
    )
  }

  render () {
    const { myCart } = this.props
    return (
      <>
        <header style={{ marginTop: '10px' }}>
          <Navbar color='none' light={true} expand='md'>
            <NavbarBrand>
              <Link route='/'>
                <img className='img-fluid logo' src='/static/img/logo.png' alt='Kopi Florist' />
              </Link>
            </NavbarBrand>
            <NavbarToggler id='dropdown' />
            <UncontrolledCollapse toggler='#dropdown' navbar={true} className='text-hel-reg'>
              <Nav className='ml-4 mt-3' navbar={true}>
                <NavItem className='pr-3'>
                  <Link route='/about'>
                    <NavLink active={this.state.active.includes('/about')}>
                      <p>About</p>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className='pr-3'>
                  <Link route='/coffee_trip'>
                    <NavLink active={this.state.active.includes('/coffee_trip')}>
                      <p>Coffee Trip</p>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className='pr-3'>
                  <Link route='/shop'>
                    <NavLink active={this.state.active.includes('/shop')}>
                      <p>Shop</p>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className='pr-3'>
                  <Link route='/blog'>
                    <NavLink active={this.state.active.includes('/blog')}>
                      <p>Blog</p>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className='pr-3'>
                  <Link route='/howtoorder'>
                    <NavLink active={this.state.active.includes('/howtoorder')}>
                      <p>How To Order</p>
                    </NavLink>
                  </Link>
                </NavItem>
              </Nav>
              <Nav className='ml-auto mt-3 signup_login' navbar={true}>
                {
                  this.state.token &&
                  <NavItem>
                    <NavLink>
                      <Link route='cart'>
                        <p>Cart({myCart !== null ? myCart.item_count : 0})</p>
                      </Link>
                    </NavLink>
                  </NavItem>
                }
                {this.renderDropdown()}
              </Nav>
            </UncontrolledCollapse>
          </Navbar>
          <div style={{ borderBottom: '1px solid #979797', marginTop: '10px', marginBottom: '50px' }} />
          <ModalAuth modal={this.state.modal} toggleModal={this.toggleModal}/>
        </header>
      </>
    )
  }
}

const mapStateToProps = ({ user, cartcheckout, review }: any) => {
  const { profile } = user
  const { myCart } = cartcheckout
  const { userReviews } = review

  return { profile, myCart, userReviews }
}

export default connect(mapStateToProps, { getProfile, getInfoMyCart, getUserReviews, logout })(Header)
