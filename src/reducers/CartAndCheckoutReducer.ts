import { Action, GET_ALL_CART, GET_INFO_MY_CART, GET_ALL_PICKUP_METHOD, UPDATE_DATA_CHECKOUT, RESET_STATE_RAJAONGKIR_ALL } from 'actions/types'

interface State {
  coupon_code: string
  dataProduct: any[]
  dataTrip: any[]
  myCart: any
  allPickupMethod: any[]
  address: string
  province: number
  postal_code: string
  city: number
  service: string
  idAddress: number
  priceService: number
}

const INITIAL_STATE: State = {
  coupon_code: '',
  dataProduct: [],
  dataTrip: [],
  myCart: {},
  allPickupMethod: [],
  address: '',
  province: 0,
  postal_code: '',
  city: 0,
  service: '',
  idAddress: 0,
  priceService: 0
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case UPDATE_DATA_CHECKOUT:
      return { ...state, [action.payload.prop]: action.payload.value }
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
    case RESET_STATE_RAJAONGKIR_ALL:
      return { ...state, postal_code: '' }
    default:
      return state
  }
}
