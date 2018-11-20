import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'reactstrap'
import { getProfile } from 'actions/index'
import EditProfile from './EditProfile'
import _ from 'lodash'

interface StateProps {
  profile: any
}

interface DispatchProps {
  getProfile: typeof getProfile
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  edit: boolean
}

class MyAccount extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.state = { edit: false }

    this.onEditClick = this.onEditClick.bind(this)
  }

  onEditClick () {
    this.setState((previousState) => ({
      edit: !previousState.edit
    }))
  }

  componentDidMount () {
    this.props.getProfile()
  }

  render () {
    const { profile } = this.props
    if (!profile) return ''
    return (
      <>
        <div/>
        <Row>
          <Col xs='10'>
            <h1 className='text-reg-95 text-black text-xl'>My Account</h1>
          </Col>
          <Col xs='2'>
            {this.state.edit ? '' : <Button color='primary' onMouseDown={this.onEditClick}>Edit Profile</Button>}
          </Col>
        </Row>
        <Row>
          <Col xs='3'>
            <ul className='list-profile'>
              <li>Account</li>
              <li>Order History</li>
            </ul>
          </Col>
          {this.state.edit
            ? <Col xs='4'><EditProfile /></Col>
            : <Col>
              <span className='text-m text-hel-reg'>Name</span>
              <p className='text-ml text-os-reg text-black-light'>{profile.name}</p>
              <span className='text-m text-hel-reg'>Email</span>
              <p className='text-ml text-os-reg text-black-light'>{profile.email}</p>
              <span className='text-m text-hel-reg'>Phone</span>
              <p className='text-ml text-os-reg text-black-light'>{profile.phone}</p>
              <span className='text-m text-hel-reg'>Address</span>
              <p className='text-ml text-os-reg text-black-light'>
                {
                  _.map(profile.address, (data: any, index: number) => {
                    return data.address
                  })
                }
              </p>
            </Col>
          }
        </Row>
      </>
    )
  }
}

const mapStateToProps = ({ user }: any) => {
  const { profile } = user

  return { profile }
}

export default connect(mapStateToProps, { getProfile })(MyAccount)
