import axios from 'axios'
import { Dispatch } from 'redux'
import { GET_ALL_BANNERS } from './types'

export const getAllBanners = () => async (dispatch: Dispatch<any>) => {
  const res = await axios.get('/banners')
  await getAllBannersSuccess(dispatch, res)
}

const getAllBannersSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_ALL_BANNERS,
    payload: res.data
  })
}
