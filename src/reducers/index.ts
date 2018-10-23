import { combineReducers } from 'redux'
import ShopReducer from './ShopReducer'
import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'
import BlogReducer from './BlogReducer'

const rootReducer = combineReducers({
  shop: ShopReducer,
  auth: AuthReducer,
  user: UserReducer,
  blog: BlogReducer
})

export default rootReducer
