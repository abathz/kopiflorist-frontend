import React, { Component, ChangeEvent, FormEvent } from 'react'
import { connect } from 'react-redux'
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link } from 'routes'
import { updateDataSignUp, signUp, signIn } from 'actions/index'

interface StateProps {
  modal: any
  toggleModal: any
  auth: any
}

interface DispatchProps {
  updateDataSignUp: typeof updateDataSignUp
  signUp: typeof signUp
  signIn: typeof signIn
}

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent {
  register: boolean
  organization: boolean
  errorMessage: string
}

class ModalAuth extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.state = {
      register: false,
      organization: false,
      errorMessage: ''
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onRegisterSubmit = this.onRegisterSubmit.bind(this)
    this.onLoginSubmit = this.onLoginSubmit.bind(this)
    this.changeModal = this.changeModal.bind(this)
  }

  onInputChange (e: ChangeEvent<HTMLInputElement>) {
    if (e.target.id === 'organization') {
      if (e.target.value === 'company') {
        this.setState({ organization: true })
        return
      }
      if (e.target.value === 'personal') {
        this.setState({ organization: false })
        return
      }
    }
    this.props.updateDataSignUp({ prop: e.target.id, value: e.target.value })
  }

  onRegisterSubmit (e: FormEvent) {
    e.preventDefault()
    const { auth } = this.props
    if (auth.name !== '' && auth.email !== '' && auth.password !== '' && auth.phone !== 0 && auth.gender !== '' && this.state.organization && auth.company_name !== '') {
      this.props.signUp(this.props.auth)
      return
    }

    this.setState({ errorMessage: 'Please fill all blank field' })
  }

  onLoginSubmit (e: FormEvent) {
    e.preventDefault()
    const { auth } = this.props

    if (auth.email !== '' && auth.password !== '') {
      this.props.signIn(this.props.auth)
      return
    }

    this.setState({ errorMessage: 'Please fill all blank field' })
  }

  changeModal () {
    this.setState((previousState) => ({
      register: !previousState.register
    }))
  }

  renderModalBody (register: boolean) {
    if (register) {
      return (
        <>
          <ModalHeader>Sign up</ModalHeader>
          <ModalBody>
            {this.state.errorMessage !== ''
              ? <div className='alert alert-danger' role='alert'>
                  {this.state.errorMessage}
                </div>
              : <div/>
            }
            <Form onSubmit={this.onRegisterSubmit}>
              <FormGroup>
                <Label for='name'>Nama</Label>
                <Input type='text' name='name' id='name' placeholder='John Doe' autoFocus={true} onChange={this.onInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for='organization'>Organization</Label>
                <Input type='select' id='organization' onChange={this.onInputChange}>
                  <option value='personal'>Personal</option>
                  <option value='company'>Company</option>
                </Input>
              </FormGroup>
              {
                this.state.organization
                ? <FormGroup>
                    <Label for='company_name'>Company Name</Label>
                    <Input type='text' name='company_name' id='company_name' onChange={this.onInputChange} />
                  </FormGroup>
                : <div/>
              }
              <FormGroup>
                <Label for='email'>Email</Label>
                <Input type='email' name='email' id='email' placeholder='example@mail.com' onChange={this.onInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for='password'>Password</Label>
                <Input type='password' name='password' id='password' placeholder='********' onChange={this.onInputChange} />
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
              <Button className='float-right pr-5 pl-5 button-yellow'>Sign Up</Button>
            </Form>
            <div className='clearfix' />
            <div className='float-right clearfix'>
              Have account? <span className='text-black' onMouseDown={this.changeModal}>Sign In</span> here
          </div>
          </ModalBody>
        </>
      )
    } else {
      return (
        <>
          <ModalHeader>Sign in</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onLoginSubmit}>
              <FormGroup>
                <Label for='email'>Email</Label>
                <Input type='email' name='email' id='email' placeholder='example@mail.com' autoFocus={true} onChange={this.onInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for='password'>Password</Label>
                <Input type='password' name='email' id='password' placeholder='********' onChange={this.onInputChange} />
              </FormGroup>
              <FormGroup className='clearfix mb-5'>
                <Link route='#'>
                  <a className='float-right'>Forgot Password</a>
                </Link>
              </FormGroup>
              <Button className='float-right pr-5 pl-5 button-yellow'>Sign in</Button>
            </Form>
            <div className='clearfix' />
            <div className='float-right clearfix'>
              or <span className='text-black' onMouseDown={this.changeModal}>Sign Up</span> here
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

export default connect(mapStateToProps, { updateDataSignUp, signUp, signIn })(ModalAuth)
