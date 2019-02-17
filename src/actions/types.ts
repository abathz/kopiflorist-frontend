import axios from 'axios'
const isDev = process.env.NODE_ENV !== 'production'

axios.defaults.baseURL = isDev ? 'http://localhost:1337/api' : 'https://api.kopiflorist.id/api'

export interface Action {
  type: string,
  payload?: any
}

// AUTH
export const UPDATE_DATA_SIGNUP = 'UPDATE_DATA_SIGNUP'
export const SIGNUP_FAILED = 'SIGNUP_FAILED'

// SHOP
export const UPDATE_DATA_SHOP = 'UPDATE_DATA_SHOP'
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT'
export const GET_PRODUCT = 'GET_PRODUCT'
export const RESET_STATE_PRODUCT = 'RESET_STATE_PRODUCT'

// PROFILE
export const UPDATE_DATA_PROFILE = 'UPDATE_DATA_PROFILE'
export const GET_PROFILE = 'GET_PROFILE'
export const GET_USER_ADDRESSES = 'GET_USER_ADDRESSES'
export const GET_USER_ADDRESS = 'GET_USER_ADDRESS'

// BLOG
export const GET_ALL_BLOG = 'GET_ALL_BLOG'
export const GET_BLOG = 'GET_BLOG'

// CART & CHECKOUT
export const UPDATE_DATA_CHECKOUT = 'UPDATE_DATA_CHECKOUT'
export const GET_ALL_CART = 'GET_ALL_CART'
export const GET_INFO_MY_CART = 'GET_INFO_MY_CART'
export const GET_ALL_PICKUP_METHOD = 'GET_ALL_PICKUP_METHOD'

// TRIP
export const UPDATE_DATA_TRIP = 'UPDATE_DATA_TRIP'
export const ADD_DATA_GUEST = 'ADD_DATA_GUEST'
export const REMOVE_DATA_GUEST = 'REMOVE_DATA_GUEST'
export const GET_ALL_TRIP_PACKAGE = 'GET_ALL_TRIP_PACKAGE'
export const GET_TRIP_PACKAGE = 'GET_TRIP_PACKAGE'
export const GET_ALL_TRIP = 'GET_ALL_TRIP'
export const GET_TRIP = 'GET_TRIP'
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY'
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY'

// RAJAONGKIR
export const RESET_STATE_RAJAONGKIR_ALL = 'RESET_STATE_RAJAONGKIR_ALL'
export const RESET_STATE_RAJAONGKIR_COST = 'RESET_STATE_RAJAONGKIR_COST'
export const GET_ALL_PROVINCES = 'GET_ALL_PROVINCES'
export const GET_ALL_CITIES = 'GET_ALL_CITIES'
export const GET_DEIVERY_COST = 'GET_DEIVERY_COST'
export const TRACK_DELIVERY_SUCCESS = 'TRACK_DELIVERY_SUCCESS'
export const TRACK_DELIVERY_FAILED = 'TRACK_DELIVERY_FAILED'

// REVIEW TRIP
export const UPDATE_DATA_REVIEW = 'UPDATE_DATA_REVIEW'
export const GET_TRIP_REVIEWS = 'GET_TRIP_REVIEWS'
export const GET_USER_REVIEWS = 'GET_USER_REVIEWS'

// USER INVOICE
export const GET_USER_INVOICES = 'GET_USER_INVOICES'
export const GET_INVOICE = 'GET_INVOICE'
