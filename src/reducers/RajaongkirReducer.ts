import { Action, GET_ALL_PROVINCES, GET_ALL_CITIES, GET_DEIVERY_COST, RESET_STATE_RAJAONGKIR_ALL, RESET_STATE_RAJAONGKIR_COST, TRACK_DELIVERY } from 'actions/types'

interface State {
  provinces: any[]
  cities: any[]
  deliveryCost: any
  trackingDelivery: any
}

const INITIAL_STATE: State = {
  provinces: [],
  cities: [],
  deliveryCost: null,
  trackingDelivery: {}
}

export default (state= INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case GET_ALL_PROVINCES:
      return { ...state, provinces: action.payload.provinces }
    case GET_ALL_CITIES:
      return { ...state, cities: action.payload.cities }
    case GET_DEIVERY_COST:
      return { ...state, deliveryCost: action.payload }
    case RESET_STATE_RAJAONGKIR_ALL:
      return { ...state, cities: [], deliveryCost: [] }
    case RESET_STATE_RAJAONGKIR_COST:
      return { ...state, deliveryCost: [] }
    case TRACK_DELIVERY:
      return { ...state, trackingDelivery: action.payload.result }
    default:
      return state
  }
}
