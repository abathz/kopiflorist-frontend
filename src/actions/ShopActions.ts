import axios from 'axios'
import { Dispatch } from 'redux'
import querystring from 'querystring'
import { GET_ALL_PRODUCT, GET_PRODUCT, RESET_STATE_PRODUCT, UPDATE_DATA_SHOP, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from './types'

export const updateDataShop = ({ prop, value }: any) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: UPDATE_DATA_SHOP,
    payload: { prop, value }
  })
}

export const orderProduct = (newData: any) => async (dispatch: Dispatch<any>) => {
  let data = {
    product_id: newData.id,
    quantity: newData.quantity
  }

  await axios.post('/order_product', querystring.stringify(data), {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  await orderProductSuccess()
}

export const getAllProduct = () => async (dispatch: Dispatch<any>) => {
  const res = await axios.get('/products')
  await getAllProductSuccess(dispatch, res)
}

export const getProduct = (id: number) => async (dispatch: Dispatch<any>) => {
  const res = await axios.get(`/product/${id}`)
  await getProductSuccess(dispatch, res)
}

export const resetStateProduct = () => async (dispatch: Dispatch<any>) => {
  dispatch({
    type: RESET_STATE_PRODUCT
  })
}

export const incrementQuantity = (id: number) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: INCREMENT_QUANTITY,
    payload: id
  })
}

export const decrementQuantity = (id: number) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: DECREMENT_QUANTITY,
    payload: id
  })
}

const orderProductSuccess = () => {
  window.location.href = '/cart'
}

const getAllProductSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_ALL_PRODUCT,
    payload: res.data
  })
}

const getProductSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_PRODUCT,
    payload: res.data
  })
}
