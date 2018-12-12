import axios from 'axios'
import { Dispatch } from 'redux'
import { GET_ALL_PROVINCES, GET_ALL_CITIES } from './types'

export const getAllProvince = () => async (dispatch: Dispatch<any>) => {
  const res = await axios.get('/provinces')
  await getAllProvinceSuccess(dispatch, res)
}

export const getAllCities = (id: number) => async (dispatch: Dispatch<any>) => {
  const res = await axios.get(`/cities?province_id=${id}`)
  await getAllCitiesSuccess(dispatch, res)
}

const getAllProvinceSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_ALL_PROVINCES,
    payload: res.data
  })
}

const getAllCitiesSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_ALL_CITIES,
    payload: res.data
  })
}
