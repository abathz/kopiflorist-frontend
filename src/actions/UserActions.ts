import axios from 'axios'
import querystring from 'querystring'
import { Dispatch } from 'redux'
import { GET_PROFILE, UPDATE_DATA_PROFILE, GET_USER_ADDRESSES, GET_USER_ADDRESS, GET_USER_TRANSACTION } from './types'
import _ from 'lodash'
import { logout } from './AuthActions'

export const updateDataProfile = ({ prop, value }: any) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: UPDATE_DATA_PROFILE,
    payload: { prop, value }
  })
}

export const getProfile = () => async (dispatch: Dispatch<any>) => {
  try {
    const res = await axios.get('/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    await getProfileSuccess(dispatch, res)
  } catch (err) {
    if (err && err.response.status === 401) {
      await logout()
    }
  }
}

export const createAddress = (newData: any) => async (dispatch: Dispatch<any>) => {
  await axios.post('/address', querystring.stringify(newData), {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  await createAddressSuccess()
}

export const getUserAddresses = () => async (dispatch: Dispatch<any>) => {
  const res = await axios.get('/address', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  await getUserAddressesSuccess(dispatch, res)
}

export const getUserAddress = (id: number) => async (dispatch: Dispatch<any>) => {
  const res = await axios.get(`/address/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  await getUserAddressSuccess(dispatch, res)
}

export const editProfile = (newData: any) => async (dispatch: Dispatch<any>) => {
  let data = {
    name: newData.name,
    email: newData.email,
    phone: newData.phone
  }

  await axios.post('/edit_profile', querystring.stringify(data), {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  await _.map(newData.editedUserAddress, async (data: any, index: number) => {
    let address = {
      address: data.address,
      postal_code: data.postal_code,
      city_id: data.city_id,
      province_id: data.province_id
    }
    await axios.patch(`/address/${data.id}`, querystring.stringify(address), {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  })

  await editProfileSuccess()
}

export const getUserTransaction = () => async (dispatch: Dispatch<any>) => {
  const res = await axios.get('/my_invoices', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  await getUserTransactionSuccess(dispatch, res)
}

const getProfileSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_PROFILE,
    payload: res.data.user
  })
}

const createAddressSuccess = () => {
  window.location.reload()
}

const getUserAddressesSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_USER_ADDRESSES,
    payload: res.data
  })
}

const getUserAddressSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_USER_ADDRESS,
    payload: res.data
  })
}

const editProfileSuccess = () => {
  window.location.reload()
}

const getUserTransactionSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_USER_TRANSACTION,
    payload: res.data
  })
}
