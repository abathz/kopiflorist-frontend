import axios from 'axios'
import { Dispatch } from 'redux'
import { GET_USER_REVIEWS } from './types'

export const getUserReviews = () => async (dispatch: Dispatch<any>) => {
  const res = await axios.get('/my_reviews', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  await getUserReviewsSuccess(dispatch, res)
}

const getUserReviewsSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_USER_REVIEWS,
    payload: res.data
  })
}
