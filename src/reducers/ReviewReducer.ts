import { Action, GET_USER_REVIEWS } from 'actions/types'

interface State {
  userReviews: any[]
}

const INITIAL_STATE: State = {
  userReviews: []
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case GET_USER_REVIEWS:
      return { ...state, userReviews: action.payload.trips }
    default:
      return state
  }
}
