import { GET_ALL_PRODUCT, GET_PRODUCT, Action, RESET_STATE_PRODUCT, UPDATE_DATA_SHOP, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from 'actions/types'

interface State {
  quantity: number
  allProduct: any[]
  product: any[]
  quantityAddOns: any[]
}

const INITIAL_STATE: State = {
  quantity: 0,
  allProduct: [],
  product: [],
  quantityAddOns: []
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case UPDATE_DATA_SHOP:
      return { ...state, [action.payload.prop]: action.payload.value }
    case GET_ALL_PRODUCT:
      action.payload.data.map((data: any) => {
        state.quantityAddOns.push(0)
      })
      return { ...state, allProduct: action.payload.data }
    case GET_PRODUCT:
      return { ...state, product: action.payload.data }
    case INCREMENT_QUANTITY:
      state.quantityAddOns[action.payload] += 1
      return { ...state }
    case DECREMENT_QUANTITY:
      if (state.quantityAddOns[action.payload] <= 0) state.quantityAddOns[action.payload] = 0
      state.quantityAddOns[action.payload] -= 1
      return { ...state }
    case RESET_STATE_PRODUCT:
      return { ...state, product: [] }
    default:
      return state
  }
}
