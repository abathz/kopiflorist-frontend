import axios from 'axios'
import { Dispatch } from 'redux'
import { GET_ALL_PROVINCES, GET_ALL_CITIES, GET_DEIVERY_COST, RESET_STATE_RAJAONGKIR_ALL, RESET_STATE_RAJAONGKIR_COST } from './types'

export const resetData = (state: string) => (dispatch: Dispatch<any>) => {
  if (state === 'all') dispatch({ type: RESET_STATE_RAJAONGKIR_ALL })
  else if (state === 'cost') dispatch({ type: RESET_STATE_RAJAONGKIR_COST })
}

export const getAllProvince = () => async (dispatch: Dispatch<any>) => {
  const res = await axios.get('/provinces')
  await getAllProvinceSuccess(dispatch, res)
}

export const getAllCities = (idProvince: number) => async (dispatch: Dispatch<any>) => {
  const res = await axios.get(`/cities?province_id=${idProvince}`)
  await getAllCitiesSuccess(dispatch, res)
}

export const getDeliveryCost = (cartId: number, destination: number, courier: number) => async (dispatch: Dispatch<any>) => {
  const res = await axios.get(`/cost/${cartId}?destination=${destination}&courier=${courier}`)
  await getDeliveryCostSuccess(dispatch, res)
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

const getDeliveryCostSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_DEIVERY_COST,
    payload: res.data.result[0]
  })
}
