import { Action, GET_PROFILE, UPDATE_DATA_PROFILE } from 'actions/types'

interface State {
  name: string
  email: string
  phone: number
  address: string
  profile: any
}

const INITIAL_STATE: State = {
  name: '',
  email: '',
  phone: 0,
  address: '',
  profile: {}
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case UPDATE_DATA_PROFILE:
      return { ...state, [action.payload.prop]: action.payload.value }
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        address: action.payload.address
      }
    default:
      return state
  }
}
