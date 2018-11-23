import { Action, UPDATE_DATA_TRIP, ADD_DATA_GUEST, GET_ALL_TRIP, GET_TRIP, GET_TRIP_PACKAGE } from 'actions/types'

interface State {
  guest_name: string
  email: string
  meal_preference: string
  age: number
  phone: number
  guestList: any[]
  allTrip: any[]
  tripDetail: any[]
  tripPackage: any[]
}

const INITIAL_STATE: State = {
  guest_name: '',
  email: '',
  meal_preference: '',
  age: 0,
  phone: 0,
  guestList: [],
  allTrip: [],
  tripDetail: [],
  tripPackage: []
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case UPDATE_DATA_TRIP:
      return { ...state, [action.payload.prop]: action.payload.value }
    case ADD_DATA_GUEST:
      state.guestList.push(action.payload)
      return { ...state }
    case GET_ALL_TRIP:
      return { ...state, allTrip: action.payload }
    case GET_TRIP:
      return { ...state, tripDetail: action.payload.data }
    case GET_TRIP_PACKAGE:
      return { ...state, tripPackage: action.payload.data }
    default:
      return state
  }
}
