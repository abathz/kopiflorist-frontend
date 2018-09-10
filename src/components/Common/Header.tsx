import React, { Component } from 'react'
import {
  Collapse,
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
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input
 } from 'reactstrap'
import { Link } from 'routes'

interface StateProps { }

interface DispatchProps { }

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent {
  isOpen: boolean,
  modal: boolean
}

const ModalPopup = ({ modal, toggleModal }: any) => {
  return (
    <Modal isOpen={modal} toggle={toggleModal} contentClassName='border-modal'>
      <ModalHeader toggle={toggleModal}>WELCOME!</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input type='email' name='email' id='email' placeholder='example@mail.com' />
          </FormGroup>
          <FormGroup>
            <Label for='password'>Password</Label>
            <Input type='password' name='email' id='password' placeholder='********' />
          </FormGroup>
          <FormGroup className='clearfix mb-5'>
            <Link route=''>
              <a className='float-right'>Forgot Password</a>
            </Link>
          </FormGroup>
        </Form>
        <Button color='primary' className='float-right pr-5 pl-5' onClick={toggleModal}>Sign in</Button>
        <div className='clearfix'/>
        <p className='float-right clearfix'>
          or{' '}
          <Link route=''>
            <a>Sign Up</a>
          </Link>{' '}
          here
        </p>
      </ModalBody>
    </Modal>
  )
}

class Header extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)
    this.state = {
      isOpen: false,
      modal: false
    }

    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleDropdown () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  toggleModal () {
    this.setState({
      modal: !this.state.modal
    })
  }

  renderDropdown () {
    // tslint:disable-next-line:no-constant-condition
    if (false) {
      return (
        <UncontrolledDropdown className='ml-auto' nav={true} inNavbar={true}>
          <DropdownToggle nav={true} caret={true}>
            Adli Fariz
                  </DropdownToggle>
          <DropdownMenu right={true}>
            <DropdownItem>
              Setting
                    </DropdownItem>
            <DropdownItem divider={true} />
            <DropdownItem>
              Sign out
                    </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      )
    } else {
      return (
        <NavItem>
          <NavLink onClick={this.toggleModal}>
            <p>Signin/Signup</p>
          </NavLink>
        </NavItem>
      )
    }
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
            <NavbarToggler onClick={this.toggleDropdown} />
            <Collapse isOpen={this.state.isOpen} navbar={true} className='text-hel-reg'>
              <Nav className='ml-4 mt-3' navbar={true}>
                <NavItem className='pr-3'>
                  <Link route='about'>
                    <NavLink>
                      <p>About</p>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className='pr-3'>
                  <Link route='coffeetrip'>
                    <NavLink>
                      <p>Coffee Trip</p>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className='pr-3'>
                  <Link route='shop'>
                    <NavLink>
                      <p>Shop</p>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className='pr-3'>
                  <Link route='blog'>
                    <NavLink>
                      <p>Blog</p>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className='pr-3'>
                  <Link route='howtoorder'>
                    <NavLink>
                      <p>How To Order</p>
                    </NavLink>
                  </Link>
                </NavItem>
              </Nav>
              <Nav className='ml-auto mt-3' navbar={true}>
                <NavItem>
                  <NavLink href=''>
                    <Link route=''>
                      <p>Cart(0)</p>
                    </Link>
                  </NavLink>
                </NavItem>
                {this.renderDropdown()}
              </Nav>
            </Collapse>
          </Navbar>
          <div style={{ borderBottom: '1px solid #979797', marginTop: '10px', marginBottom: '50px' }} />
          <ModalPopup modal={this.state.modal} toggleModal={this.toggleModal}/>
        </header>
      </>
    )
  }
}

export default Header
