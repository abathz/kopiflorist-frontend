import { Action, GET_USER_REVIEWS, UPDATE_DATA_REVIEW } from 'actions/types'

interface State {
  userReviews: any[]
  reviewTrip: string
  ratingReview: number
}

const INITIAL_STATE: State = {
  userReviews: [],
  reviewTrip: '',
  ratingReview: 0
}

const ReviewReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case UPDATE_DATA_REVIEW:
      return { ...state, [action.payload.prop]: action.payload.value }
    case GET_USER_REVIEWS:
      return { ...state, userReviews: action.payload.trips }
    default:
      return state
  }
}

export default ReviewReducer
