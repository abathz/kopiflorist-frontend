import { Action, GET_PROFILE } from 'actions/types'

interface State {
  profile: any
  session: any
}

const INITIAL_STATE: State = {
  profile: {},
  session: ''
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
  case GET_PROFILE:
    const session = localStorage.getItem('email')
    return { ...state, profile: action.payload, session }
  default:
    return state
  }
}
