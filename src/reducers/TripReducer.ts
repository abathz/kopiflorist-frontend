import { Action, UPDATE_DATA_TRIP, ADD_DATA_GUEST } from 'actions/types'

interface State {
  guest_name: string
  email: string
  meal_preference: string
  age: number
  phone: number
  guestList: any[]
}

const INITIAL_STATE: State = {
  guest_name: '',
  email: '',
  meal_preference: '',
  age: 0,
  phone: 0,
  guestList: []
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case UPDATE_DATA_TRIP:
      return { ...state, [action.payload.prop]: action.payload.value }
    case ADD_DATA_GUEST:
      state.guestList.push(action.payload)
      return { ...state }
    default:
      return state
  }
}
