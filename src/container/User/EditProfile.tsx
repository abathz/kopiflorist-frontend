import React, { Component, ChangeEvent, FormEvent } from 'react'
import { connect } from 'react-redux'
import { FormGroup, Form, Label, Input, Button } from 'reactstrap'
import { updateDataProfile, getProfile, editProfile } from 'actions/index'

interface StateProps {
  user: any
}

interface DispatchProps {
  updateDataProfile: typeof updateDataProfile
  getProfile: typeof getProfile
  editProfile: typeof editProfile
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {}

class EditProfile extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount () {
    this.props.getProfile()
  }

  onInputChange (e: ChangeEvent<HTMLInputElement>) {
    this.props.updateDataProfile({ prop: e.target.id, value: e.target.value })
  }

  onSubmit (e: FormEvent) {
    e.preventDefault()
    this.props.editProfile(this.props.user)
  }

  render () {
    const { user } = this.props
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for='name'>Name</Label>
          <Input type='text' id='name' value={user.name} onChange={this.onInputChange} />
        </FormGroup>
        <FormGroup>
          <Label for='email'>Email</Label>
          <Input type='text' id='email' value={user.email} onChange={this.onInputChange} />
        </FormGroup>
        <FormGroup>
          <Label for='phone'>Phone</Label>
          <Input type='text' id='phone' value={user.phone} onChange={this.onInputChange} />
        </FormGroup>
        <FormGroup>
          <Label for='address'>Address</Label>
          <Input type='text' id='address' value={user.address[0].address} onChange={this.onInputChange} />
        </FormGroup>
        <Button block={true} color='primary'>Save</Button>
      </Form>
    )
  }
}

const mapStateToProps = ({ user }: any) => {
  return { user }
}

export default connect(mapStateToProps, { updateDataProfile, getProfile, editProfile })(EditProfile)
