import axios from 'axios'
import querystring from 'querystring'
import { Dispatch } from 'redux'
import { GET_PROFILE } from './types'

export const getProfile = (email: string) => async (dispatch: Dispatch<any>) => {
  const res = await axios.post('/profile', querystring.stringify({ email }), {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  await getProfileSuccess(dispatch, res)
}

const getProfileSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_PROFILE,
    payload: res.data.user
  })
}
