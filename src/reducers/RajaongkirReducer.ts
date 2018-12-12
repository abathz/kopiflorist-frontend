import { Action, GET_ALL_PROVINCES, GET_ALL_CITIES } from 'actions/types'

interface State {
  provinces: any[]
  cities: any[]
}

const INITIAL_STATE: State = {
  provinces: [],
  cities: []
}

export default (state= INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case GET_ALL_PROVINCES:
      return { ...state, provinces: action.payload.provinces }
    case GET_ALL_CITIES:
      return { ...state, cities: action.payload.cities }
    default:
      return state
  }
}
