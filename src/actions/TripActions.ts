import axios from 'axios'
import { Dispatch } from 'redux'
import { UPDATE_DATA_TRIP, ADD_DATA_GUEST } from './types'

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
