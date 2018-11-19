import { Action, UPDATE_COUPON_CODE, GET_ALL_CART } from 'actions/types'

interface State {
  coupon_code: string
  dataProduct: any
  dataTrip: any
}

const INITIAL_STATE: State = {
  coupon_code: '',
  dataProduct: [],
  dataTrip: []
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case UPDATE_COUPON_CODE:
      return { ...state, coupon_code: action.payload }
    case GET_ALL_CART:
      return {
        ...state,
        dataProduct: action.payload.dataProduct,
        dataTrip: action.payload.dataTrip
      }
    default:
      return state
  }
}
