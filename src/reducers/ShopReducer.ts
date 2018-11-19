import { GET_ALL_PRODUCT, GET_PRODUCT, Action, RESET_STATE_PRODUCT, UPDATE_DATA_SHOP } from 'actions/types'

interface State {
  quality: string
  allProduct: any[]
  product: any[]
}

const INITIAL_STATE: State = {
  quality: '',
  allProduct: [],
  product: []
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case UPDATE_DATA_SHOP:
      return { ...state, [action.payload.prop]: action.payload.value }
    case GET_ALL_PRODUCT:
      return { ...state, allProduct: action.payload }
    case GET_PRODUCT:
      return { ...state, product: action.payload.data }
    case RESET_STATE_PRODUCT:
      return { ...state, product: [] }
    default:
      return state
  }
}
