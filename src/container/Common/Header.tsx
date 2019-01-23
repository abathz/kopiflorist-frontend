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
  DropdownItem
 } from 'reactstrap'
import { Link } from 'routes'
import ModalAuth from './ModalAuth'
import { getProfile, getInfoMyCart, logout } from 'actions/index'

interface StateProps {
  profile: any
  myCart: any
}

interface DispatchProps {
  getProfile: typeof getProfile
  logout: typeof logout
  getInfoMyCart: typeof getInfoMyCart
}

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent {
  isOpen: boolean
  modal: boolean
  active: string
  token: string
}

class Header extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)
    this.state = {
      isOpen: false,
      modal: false,
      active: '',
      token: ''
    }

    this.toggleModal = this.toggleModal.bind(this)
    this.logout = this.logout.bind(this)
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
    }
  }

  logout () {
    this.props.logout()
  }

  toggleModal () {
    this.setState({
      modal: !this.state.modal
    })
  }

  renderDropdown () {
    const { profile } = this.props
    if (!profile) return ''
    if (this.state.token) {
      return (
        <UncontrolledDropdown className='ml-auto' nav={true} inNavbar={true}>
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
                Review
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
              <Nav className='ml-auto mt-3' navbar={true}>
                {
                  this.state.token
                  ? <NavItem>
                      <NavLink>
                        <Link route='cart'>
                          <p>Cart({myCart !== null ? myCart.item_count : 0})</p>
                        </Link>
                      </NavLink>
                    </NavItem>
                  : <div/>
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

const mapStateToProps = ({ user, cartcheckout }: any) => {
  const { profile } = user
  const { myCart } = cartcheckout

  return { profile, myCart }
}

export default connect(mapStateToProps, { getProfile, getInfoMyCart, logout })(Header)
