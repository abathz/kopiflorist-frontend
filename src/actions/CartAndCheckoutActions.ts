import axios from 'axios'
import { Dispatch } from 'redux'
import { UPDATE_COUPON_CODE, GET_ALL_CART, GET_INFO_MY_CART, GET_ALL_PICKUP_METHOD, UPDATE_DATA_CHECKOUT } from './types'

export const updateDataCheckout = ({ prop, value }: any) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: UPDATE_DATA_CHECKOUT,
    payload: { prop, value }
  })
}

export const getInfoMyCart = () => async (dispatch: Dispatch<any>) => {
  const res = await axios.get('/my_cart', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  await getInfoMyCartSuccess(dispatch, res)
}

export const getAllCart = () => async (dispatch: Dispatch<any>) => {
  const dataProduct = await axios.get('/order_product', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  const dataTrip = await axios.get('/order_trip', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  await getAllCartSuccess(dispatch, dataProduct, dataTrip)
}

export const getAllPickupMethod = () => async (dispatch: Dispatch<any>) => {
  const res = await axios.get('/pickup_method')
  await getAllPickupMethodSuccess(dispatch, res)
}

const getInfoMyCartSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_INFO_MY_CART,
    payload: res.data
  })
}

const getAllCartSuccess = (dispatch: Dispatch<any>, dataProduct: any, dataTrip: any) => {
  dispatch({
    type: GET_ALL_CART,
    payload: { dataProduct: dataProduct.data, dataTrip: dataTrip.data }
  })
}

const getAllPickupMethodSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_ALL_PICKUP_METHOD,
    payload: res.data
  })
}
