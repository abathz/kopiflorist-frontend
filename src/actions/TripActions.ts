import axios from 'axios'
import { Dispatch } from 'redux'
import { UPDATE_DATA_TRIP, ADD_DATA_GUEST, GET_ALL_TRIP, GET_TRIP, GET_TRIP_PACKAGE } from './types'

export const updateDataTrip = ({ prop, value }: any) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: UPDATE_DATA_TRIP,
    payload: { prop, value }
  })
}

export const addDataGuest = (newData: any) => (dispatch: Dispatch<any>) => {
  let data = {
    guest_name: newData.guest_name,
    email: newData.email,
    meal_preference: newData.meal_preference,
    age: newData.age,
    phone: newData.phone
  }

  dispatch({
    type: ADD_DATA_GUEST,
    payload: data
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
