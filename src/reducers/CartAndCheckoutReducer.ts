import { Action, UPDATE_COUPON_CODE } from 'actions/types'

interface State {
  coupon_code: string
}

const INITIAL_STATE: State = {
  coupon_code: ''
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case UPDATE_COUPON_CODE:
      return { ...state, coupon_code: action.payload }
    default:
      return state
  }
}
