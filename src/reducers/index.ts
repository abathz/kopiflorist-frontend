import { combineReducers } from 'redux'
import ShopReducer from './ShopReducer'
import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'
import BlogReducer from './BlogReducer'
import CartAndCheckoutReducer from './CartAndCheckoutReducer'
import TripReducer from './TripReducer'
import RajaongkirReducer from './RajaongkirReducer'

const rootReducer = combineReducers({
  shop: ShopReducer,
  auth: AuthReducer,
  user: UserReducer,
  blog: BlogReducer,
  cartcheckout: CartAndCheckoutReducer,
  trip: TripReducer,
  rajaongkir: RajaongkirReducer
})

export default rootReducer
