import React, { Component, ChangeEvent, FormEvent } from 'react'
import { connect } from 'react-redux'
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link } from 'routes'
import { updateDataSignUp, signUp } from 'actions/index'

interface StateProps {
  modal: any
  toggleModal: any
  auth: any
}

interface DispatchProps {
  updateDataSignUp: typeof updateDataSignUp
  signUp: typeof signUp
}

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent {
  register: boolean
}

class ModalPopup extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.state = {
      register: false
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.changeModal = this.changeModal.bind(this)
  }

  onInputChange (e: ChangeEvent<HTMLInputElement>) {
    this.props.updateDataSignUp({ prop: e.target.id, value: e.target.value })
  }

  onSubmit (e: FormEvent) {
    e.preventDefault()
    this.props.signUp(this.props.auth)
  }

  changeModal () {
    this.setState((previousState) => ({
      register: !previousState.register
    }))
  }

  renderModalBody (register: boolean) {
    const { auth } = this.props
    if (register) {
      return (
        <>
          <ModalHeader>Sign up</ModalHeader>
          <ModalBody>
            {auth.error.message
              ? <div className='alert alert-danger' role='alert'>
                  {auth.error.message}
                </div>
              : <div/>
            }
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='name'>Nama</Label>
                <Input type='text' name='name' id='name' placeholder='John Doe' onChange={this.onInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for='email'>Email</Label>
                <Input type='email' name='email' id='email' placeholder='example@mail.com' onChange={this.onInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for='password'>Password</Label>
                <Input type='password' name='password' id='password' placeholder='********' onChange={this.onInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for='address'>Address</Label>
                <Input type='text' name='address' id='address' placeholder='Route 66' onChange={this.onInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for='phone'>Phone</Label>
                <Input type='text' name='phone' id='phone' placeholder='08xxxxxxxxxx' onChange={this.onInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for='gender'>Gender</Label>
                <Input type='select' id='gender' onChange={this.onInputChange}>
                  <option defaultChecked={true}>Select</option>
                  <option value={'male'}>Male</option>
                  <option value={'female'}>Female</option>
                </Input>
              </FormGroup>
              <Button color='primary' className='float-right pr-5 pl-5'>Sign Up</Button>
            </Form>
            <div className='clearfix' />
            <div className='float-right clearfix'>
              Have account? <span className='text-black' onClick={this.changeModal}>Sign In</span> here
          </div>
          </ModalBody>
        </>
      )
    } else {
      return (
        <>
          <ModalHeader>Sign in</ModalHeader>
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
                <Link route='#'>
                  <a className='float-right'>Forgot Password</a>
                </Link>
              </FormGroup>
            </Form>
            <Button color='primary' className='float-right pr-5 pl-5'>Sign in</Button>
            <div className='clearfix' />
            <div className='float-right clearfix'>
              or <span className='text-black' onClick={this.changeModal}>Sign Up</span> here
          </div>
          </ModalBody>
        </>
      )
    }
  }

  render () {
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggleModal} contentClassName='border-modal'>
        {this.renderModalBody(this.state.register)}
      </Modal>
    )
  }
}

const mapStateToProps = ({ auth }: any) => {
  return { auth }
}

export default connect(mapStateToProps, { updateDataSignUp, signUp })(ModalPopup)
