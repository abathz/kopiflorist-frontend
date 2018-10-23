import axios from 'axios'
import querystring from 'querystring'
import { Dispatch } from 'redux'
import { UPDATE_DATA_SIGNUP, SIGNUP_FAILED } from './types'

export const updateDataSignUp = ({ prop, value }: any) => async (dispatch: Dispatch<any>) => {
  dispatch({
    type: UPDATE_DATA_SIGNUP,
    payload: { prop, value }
  })
}

export const signUp = (newData: any) => async (dispatch: Dispatch<any>) => {
  const data = {
    name: newData.name,
    email: newData.email,
    password: newData.password,
    phone: newData.phone,
    gender: newData.gender
  }
  try {
    const res = await axios.post('/signup', querystring.stringify(data))
    await signUpSuccess(res)
  } catch (err) {
    signUpFailed(dispatch, err)
  }
}

export const logout = () => () => {
  localStorage.clear()
  window.location.reload()
}

const signUpSuccess = (res: any) => {
  localStorage.setItem('token', res.data.token)
  localStorage.setItem('email', res.data.data.user.email)
  window.location.reload()
}

const signUpFailed = (dispatch: Dispatch<any>, err: any) => {
  dispatch({
    type: SIGNUP_FAILED,
    payload: err.response
  })
}
