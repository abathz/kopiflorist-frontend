import { Action, UPDATE_COUPON_CODE, GET_ALL_CART, GET_INFO_MY_CART, GET_ALL_PICKUP_METHOD, UPDATE_DATA_CHECKOUT } from 'actions/types'

interface State {
  coupon_code: string
  dataProduct: any[]
  dataTrip: any[]
  myCart: any
  allPickupMethod: any[]
  province: number
  postal_code: number
}

const INITIAL_STATE: State = {
  coupon_code: '',
  dataProduct: [],
  dataTrip: [],
  myCart: {},
  allPickupMethod: [],
  province: 0,
  postal_code: 0
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case UPDATE_DATA_CHECKOUT:
      return { ...state, [action.payload.prop]: action.payload.value }
    case UPDATE_COUPON_CODE:
      return { ...state, coupon_code: action.payload }
    case GET_ALL_CART:
      return {
        ...state,
        dataProduct: action.payload.dataProduct,
        dataTrip: action.payload.dataTrip
      }
    case GET_INFO_MY_CART:
      return { ...state, myCart: action.payload.cart }
    case GET_ALL_PICKUP_METHOD:
      return { ...state, allPickupMethod: action.payload.data }
    default:
      return state
  }
}
