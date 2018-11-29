import axios from 'axios'
import { Dispatch } from 'redux'
import { UPDATE_COUPON_CODE, GET_ALL_CART } from './types'

export const updateCouponCode = (value: string) => async (dispatch: Dispatch<any>) => {
  dispatch({
    type: UPDATE_COUPON_CODE,
    payload: value
  })
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

const getAllCartSuccess = (dispatch: Dispatch<any>, dataProduct: any, dataTrip: any) => {
  dispatch({
    type: GET_ALL_CART,
    payload: { dataProduct: dataProduct.data, dataTrip: dataTrip.data }
  })
}
