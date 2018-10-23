import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:1337/api'

export interface Action {
  type: string,
  payload?: any
}

// AUTH
export const UPDATE_DATA_SIGNUP = 'UPDATE_DATA_SIGNUP'
export const SIGNUP_FAILED = 'SIGNUP_FAILED'

// SHOP
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT'
export const GET_PRODUCT = 'GET_PRODUCT'
export const RESET_STATE_PRODUCT = 'RESET_STATE_PRODUCT'

// PROFILE
export const GET_PROFILE = 'GET_PROFILE'

// BLOG
export const GET_ALL_BLOG = 'GET_ALL_BLOG'
