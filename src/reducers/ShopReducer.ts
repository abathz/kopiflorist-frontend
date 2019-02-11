import { GET_ALL_PRODUCT, GET_PRODUCT, Action, RESET_STATE_PRODUCT, UPDATE_DATA_SHOP, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from 'actions/types'

interface State {
  quantity: number
  allProduct: any[]
  product: any[]
  addOns: any[]
}

const INITIAL_STATE: State = {
  quantity: 0,
  allProduct: [],
  product: [],
  addOns: []
}

const ShopReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case UPDATE_DATA_SHOP:
      return { ...state, [action.payload.prop]: action.payload.value }
    case GET_ALL_PRODUCT:
      action.payload.data.map((data: any) => {
        let product = {
          name: data.name,
          quantity: 0,
          price: data.price
        }
        state.addOns.push(product)
      })
      return { ...state, allProduct: action.payload.data }
    case GET_PRODUCT:
      return { ...state, product: action.payload.data }
    case INCREMENT_QUANTITY:

      state.addOns[action.payload].quantity += 1
      return { ...state }
    case DECREMENT_QUANTITY:
      if (state.addOns[action.payload].quantity <= 0) {
        state.addOns[action.payload].quantity = 0
        return { ...state }
      }
      state.addOns[action.payload].quantity -= 1
      return { ...state }
    case RESET_STATE_PRODUCT:
      return { ...state, product: [] }
    default:
      return state
  }
}

export default ShopReducer
