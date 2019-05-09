import { Action, GET_ALL_BANNERS } from 'actions/types'

interface State {
  allBanner: any[]
}

const INITIAL_STATE: State = {
  allBanner: []
}

const HomeReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case GET_ALL_BANNERS:
      return { ...state, allBanner: action.payload.data }
    default:
      return state
  }
}

export default HomeReducer
