import axios from 'axios'
import { Dispatch } from 'redux'
import { GET_ALL_PRODUCT, GET_PRODUCT, RESET_STATE_PRODUCT } from './types'

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
