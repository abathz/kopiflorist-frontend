import axios from 'axios'
import { Dispatch } from 'redux'
import { UPDATE_COUPON_CODE } from './types'

export const updateCouponCode = (value: string) => async (dispatch: Dispatch<any>) => {
  dispatch({
    type: UPDATE_COUPON_CODE,
    payload: value
  })
}
