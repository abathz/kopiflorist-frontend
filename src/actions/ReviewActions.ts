import axios from 'axios'
import { Dispatch } from 'redux'

export const getUserReviews = () => async (dispatch: Dispatch<any>) => {
  const res = await axios.get('/my_reviews', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  console.log(res)
}
