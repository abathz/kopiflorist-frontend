import axios from 'axios'
import { Dispatch } from 'redux'
import querystring from 'querystring'
import { GET_ALL_CART, GET_INFO_MY_CART, GET_ALL_PICKUP_METHOD, UPDATE_DATA_CHECKOUT } from './types'

let idAddress: number

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

export const createInvoice = (newData: any) => async (dispatch: Dispatch<any>) => {
  if (newData.isAddressFill) {
    let dataAddress = {
      address: newData.address,
      postal_code: newData.postal_code,
      province_id: newData.province_id,
      city_id: newData.city_id
    }

    const res = await axios.post('/address', querystring.stringify(dataAddress), {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    idAddress = res.data.address.id
  }

  let dataPayment = {
    address_id: idAddress || newData.address_id,
    pickup_method_id: newData.pickup_method_id,
    pickup_method_service: newData.pickup_method_service,
    cart_id: newData.cart_id
  }

  const res = await axios.post('/invoice', querystring.stringify(dataPayment), {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  window.location.href = res.data.invoice.snap_url
}

export const deleteOrderProduct = (idCartProduct: number) => async () => {
  await axios.delete('/order_product', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    data: { cart_product_id: idCartProduct }
  })

  await deleteOrderProductSuccess()
}

export const deleteOrderTrip = (idCartTrip: number) => async () => {
  await axios.delete('/order_trip', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    data: { cart_trip_id: idCartTrip }
  })

  await deleteOrderTripSuccess()
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

const deleteOrderProductSuccess = () => {
  window.location.reload()
}

const deleteOrderTripSuccess = () => {
  window.location.reload()
}
