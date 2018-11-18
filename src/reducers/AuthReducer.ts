import { Action, UPDATE_DATA_SIGNUP, SIGNUP_FAILED } from 'actions/types'

interface State {
  name: string
  email: string
  password: string
  phone: number
  gender: string
  error: string
}

const INITIAL_STATE: State = {
  name: '',
  email: '',
  password: '',
  phone: 0,
  gender: '',
  error: ''
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case UPDATE_DATA_SIGNUP:
      return { ...state, [action.payload.prop]: action.payload.value }
    case SIGNUP_FAILED:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
