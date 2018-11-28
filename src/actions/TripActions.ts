import axios from 'axios'
import { Dispatch } from 'redux'
import _ from 'lodash'
import querystring from 'querystring'
import { UPDATE_DATA_TRIP, ADD_DATA_GUEST, GET_ALL_TRIP, GET_TRIP, GET_TRIP_PACKAGE, REMOVE_DATA_GUEST, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from './types'
import { orderProduct } from './ShopActions'

export const updateDataTrip = ({ prop, value }: any) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: UPDATE_DATA_TRIP,
    payload: { prop, value }
  })
}

export const orderTrip = (newData: any) => async (dispatch: Dispatch<any>) => {

  let data = {
    trip_days_id: newData.trip_days_id,
    trip_package_type_id: newData.trip_package_id,
    trip_booked_participants: JSON.stringify(newData.guest_list)
  }

  const res = await axios.post('/order_trip', querystring.stringify(data), {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  _.map(newData.productAddOns, async (data: any, index: number) => {
    await dispatch(orderProduct(data))
  })

  console.log(res)
}

export const addDataGuest = (newData: any) => (dispatch: Dispatch<any>) => {
  let data = {
    name: newData.name,
    email: newData.email,
    food_preference: newData.food_preference,
    age: newData.age,
    phone: newData.phone
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

export const getTripPackage = () => async (dispatch: Dispatch<any>) => {
  const res = await axios.get('/trip_package')
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
