import axios from 'axios'
import querystring from 'querystring'
import { Dispatch } from 'redux'
import { GET_PROFILE, UPDATE_DATA_PROFILE } from './types'

export const updateDataProfile = ({ prop, value }: any) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: UPDATE_DATA_PROFILE,
    payload: { prop, value }
  })
}

export const getProfile = () => async (dispatch: Dispatch<any>) => {
  const res = await axios.get('/profile', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  await getProfileSuccess(dispatch, res)
}

export const editProfile = (newData: any) => async (dispatch: Dispatch<any>) => {
  let data = {
    name: newData.name,
    email: newData.email,
    phone: newData.phone,
    address: newData.address
  }

  await axios.post('/edit_profile', querystring.stringify(data), {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  await editProfileSuccess()
}

const getProfileSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_PROFILE,
    payload: res.data.user
  })
}

const editProfileSuccess = () => {
  window.location.reload()
}
