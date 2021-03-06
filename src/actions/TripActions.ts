import axios from 'axios'
import { Dispatch } from 'redux'
import _ from 'lodash'
import querystring from 'querystring'
import { UPDATE_DATA_TRIP, ADD_DATA_GUEST, GET_ALL_TRIP, GET_TRIP, GET_TRIP_PACKAGE, REMOVE_DATA_GUEST, INCREMENT_QUANTITY, DECREMENT_QUANTITY, GET_ALL_TRIP_PACKAGE, GET_TRIP_REVIEWS } from './types'

export const updateDataTrip = ({ prop, value }: any) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: UPDATE_DATA_TRIP,
    payload: { prop, value }
  })
}

export const orderTrip = (newData: any) => async () => {

  let data = {
    trip_days_id: newData.trip_days_id,
    trip_allowed_package_id: newData.trip_allowed_package_id,
    trip_booked_participants: JSON.stringify(newData.guest_list) || ''
  }

  await axios.post('/order_trip', querystring.stringify(data), {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  _.map(newData.productAddOns, async (data: any, index: number) => {
    let product = {
      product_id: data.id,
      quantity: data.quantity
    }

    if (product.quantity > 0) {
      await axios.post('/order_product', querystring.stringify(product), {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
    }
  })

  await orderTripSuccess()
}

export const addDataGuest = (newData: any) => (dispatch: Dispatch<any>) => {
  let data = {
    name: newData.name,
    id_number: newData.id_number,
    food_preference: newData.food_preference,
    age: newData.age,
    gender: newData.gender
  }

  dispatch({
    type: ADD_DATA_GUEST,
    payload: data
  })
}

export const removeDataGuest = (id: number) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: REMOVE_DATA_GUEST,
    payload: id
  })
}

export const getAllTripPackage = () => async (dispatch: Dispatch<any>) => {
  const res = await axios.get('/trip_package')
  await getAllTripPackageSuccess(dispatch, res)
}

export const getTripPackage = (id: number) => async (dispatch: Dispatch<any>) => {
  const res = await axios.get(`/trip_package/${id}`)
  await getTripPackageSuccess(dispatch, res)
}

export const getAllTrip = () => async (dispatch: Dispatch<any>) => {
  const res = await axios.get('/trips')
  await getAllTripSuccess(dispatch, res.data)
}

export const getTrip = (id: number) => async (dispatch: Dispatch<any>) => {
  const res = await axios.get(`/trip/${id}`)
  await getTripSuccess(dispatch, res)
}

export const getTripReviews = (id: number) => async (dispatch: Dispatch<any>) => {
  const res = await axios.get(`/trip/${id}/reviews`)
  await getTripReviewsSuccess(dispatch, res)
}

const orderTripSuccess = () => {
  localStorage.removeItem('group_size')
  localStorage.removeItem('price_trip')
  window.location.href = '/cart'
}

const getAllTripPackageSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_ALL_TRIP_PACKAGE,
    payload: res.data
  })
}

const getTripPackageSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_TRIP_PACKAGE,
    payload: res.data
  })
}

const getAllTripSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_ALL_TRIP,
    payload: res.data
  })
}

const getTripSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_TRIP,
    payload: res.data
  })
}

const getTripReviewsSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_TRIP_REVIEWS,
    payload: res.data
  })
}
