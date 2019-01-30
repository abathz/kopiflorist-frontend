import axios from 'axios'
import { Dispatch } from 'redux'
import querystring from 'querystring'
import { GET_USER_REVIEWS, UPDATE_DATA_REVIEW } from './types'

export const updateDataReview = ({ prop, value }: any) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: UPDATE_DATA_REVIEW,
    payload: { prop, value }
  })
}

export const createReview = (data: any) => async (dispatch: Dispatch<any>) => {
  let id = data.id
  let newData = {
    trip_booked_id: data.trip_booked_id,
    message: data.message,
    rating: data.rating
  }

  const res = await axios.post(`/trip/${id}/reviews`, querystring.stringify(newData), {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  console.log(res)
}

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
