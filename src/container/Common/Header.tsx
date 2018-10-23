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
import ModalPopup from './Modal'
import { getProfile, logout } from 'actions/index'

interface StateProps {
  profile: any
  session: string
}

interface DispatchProps {
  getProfile: typeof getProfile
  logout: typeof logout
}

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent {
  isOpen: boolean
  modal: boolean
  active: string
}

class Header extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)
    this.state = {
      isOpen: false,
      modal: false,
      active: ''
    }

    this.toggleModal = this.toggleModal.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentDidMount () {
    this.setState({
      active: window.location.pathname
    })
    const email: any = localStorage.getItem('email')
    this.props.getProfile(email)
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
    const { profile, session } = this.props
    if (!profile) return ''
    if (session) {
      return (
        <UncontrolledDropdown className='ml-auto' nav={true} inNavbar={true}>
          <DropdownToggle nav={true} caret={true}>
            {profile.name}
          </DropdownToggle>
          <DropdownMenu right={true}>
            <DropdownItem>
              Setting
            </DropdownItem>
            <DropdownItem divider={true} />
            <DropdownItem onClick={this.logout}>
              Sign Out
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      )
    }
    return (
      <NavItem>
        <NavLink onClick={this.toggleModal}>
          <p>Signin/Signup</p>
        </NavLink>
      </NavItem>
    )
  }

  render () {
    return (
      <>
        <header style={{ marginTop: '10px' }}>
          <Navbar color='none' light={true} expand='md'>
            <NavbarBrand>
              <Link route='home'>
                <img className='img-fluid logo' src='/static/img/logo.png' alt='Kopi Florist' />
              </Link>
            </NavbarBrand>
            <NavbarToggler id='dropdown' />
            <UncontrolledCollapse toggler='#dropdown' navbar={true} className='text-hel-reg'>
              <Nav className='ml-4 mt-3' navbar={true}>
                <NavItem className='pr-3'>
                  <Link route='about'>
                    <NavLink active={this.state.active === '/about'}>
                      <p>About</p>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className='pr-3'>
                  <Link route='coffeetrip'>
                    <NavLink active={this.state.active === '/coffee_trip'}>
                      <p>Coffee Trip</p>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className='pr-3'>
                  <Link route='shop'>
                    <NavLink active={this.state.active === '/shop'}>
                      <p>Shop</p>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className='pr-3'>
                  <Link route='blog'>
                    <NavLink active={this.state.active === '/blog'}>
                      <p>Blog</p>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className='pr-3'>
                  <Link route='howtoorder'>
                    <NavLink active={this.state.active === '/howtoorder'}>
                      <p>How To Order</p>
                    </NavLink>
                  </Link>
                </NavItem>
              </Nav>
              <Nav className='ml-auto mt-3' navbar={true}>
                <NavItem>
                  <NavLink>
                    <Link route='#'>
                      <p>Cart(0)</p>
                    </Link>
                  </NavLink>
                </NavItem>
                {this.renderDropdown()}
              </Nav>
            </UncontrolledCollapse>
          </Navbar>
          <div style={{ borderBottom: '1px solid #979797', marginTop: '10px', marginBottom: '50px' }} />
          <ModalPopup modal={this.state.modal} toggleModal={this.toggleModal}/>
        </header>
      </>
    )
  }
}

const mapStateToProps = ({ user }: any) => {
  const { profile, session } = user

  return { profile, session }
}

export default connect(mapStateToProps, { getProfile, logout })(Header)
