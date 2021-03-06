import { Action, UPDATE_DATA_TRIP, ADD_DATA_GUEST, GET_ALL_TRIP, GET_TRIP, GET_TRIP_PACKAGE, REMOVE_DATA_GUEST, GET_ALL_TRIP_PACKAGE, GET_TRIP_REVIEWS } from 'actions/types'

interface State {
  name: string
  id_number: string
  food_preference: string
  age: number
  gender: string
  group_size: string
  guest_list: number
  guestList: any[]
  price: number
  allTrip: any[]
  tripDetail: any[]
  allTripPackage: any[]
  tripPackage: any
  main_photo: string
  other_photo: any[]
  total_price: number
  tripReviews: any[]
}

const INITIAL_STATE: State = {
  name: '',
  id_number: '',
  food_preference: 'default',
  age: 0,
  gender: 'male',
  group_size: '',
  price: 0,
  guest_list: 0,
  guestList: [],
  allTrip: [],
  tripDetail: [],
  allTripPackage: [],
  tripPackage: {},
  main_photo: '',
  other_photo: [],
  total_price: 0,
  tripReviews: []
}

const TripReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case UPDATE_DATA_TRIP:
      if (action.payload.prop === 'other_photo') {
        state.other_photo[action.payload.value.id] = action.payload.value.img
        return { ...state }
      } else {
        return { ...state, [action.payload.prop]: action.payload.value }
      }
    case ADD_DATA_GUEST:
      state.guestList.push(action.payload)
      return { ...state }
    case REMOVE_DATA_GUEST:
      state.guestList.splice(action.payload, 1)
      return { ...state }
    case GET_ALL_TRIP:
      return { ...state, allTrip: action.payload }
    case GET_TRIP:
      action.payload.data.other_photo.map((data: any) => {
        state.other_photo.push(data)
      })
      return { ...state, tripDetail: action.payload.data, main_photo: action.payload.data.main_photo }
    case GET_ALL_TRIP_PACKAGE:
      return { ...state, allTripPackage: action.payload.data }
    case GET_TRIP_PACKAGE:
      return { ...state, tripPackage: action.payload.data }
    case GET_TRIP_REVIEWS:
      return { ...state, tripReviews: action.payload.reviews }
    default:
      return state
  }
}

export default TripReducer
