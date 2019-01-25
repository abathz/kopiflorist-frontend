import { Action, GET_PROFILE, UPDATE_DATA_PROFILE, GET_USER_ADDRESSES, GET_USER_ADDRESS, GET_USER_TRANSACTION } from 'actions/types'
import _ from 'lodash'

interface State {
  name: string
  email: string
  phone: number
  address: string
  profile: any
  city: string
  province: string
  postal_code: number
  city_id: number
  province_id: number
  userAddresses: any[]
  editedUserAddress: any[]
  userTransaction: any[]
}

const INITIAL_STATE: State = {
  name: '',
  email: '',
  phone: 0,
  address: '',
  profile: {},
  city: '',
  province: '',
  postal_code: 0,
  city_id: 0,
  province_id: 0,
  userAddresses: [],
  editedUserAddress: [],
  userTransaction: []
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case UPDATE_DATA_PROFILE:
      if (action.payload.prop === 'userAddress') {
        if (action.payload.value.target.id === 'address') {
          state.editedUserAddress[action.payload.value.indexAddress].address = action.payload.value.target.value
        } else if (action.payload.value.target.id === 'city') {
          state.editedUserAddress[action.payload.value.indexAddress].city_id = action.payload.value.city_id
          state.editedUserAddress[action.payload.value.indexAddress].city = action.payload.value.target.value
        } else if (action.payload.value.target.id === 'province') {
          state.editedUserAddress[action.payload.value.indexAddress].province_id = action.payload.value.province_id
          state.editedUserAddress[action.payload.value.indexAddress].province = action.payload.value.target.value
        } else if (action.payload.value.target.id === 'postal_code') {
          state.editedUserAddress[action.payload.value.indexAddress].postal_code = action.payload.value.target.value
        }
        return { ...state }
      }
      return { ...state, [action.payload.prop]: action.payload.value }
    case GET_PROFILE:
      return { ...state,
        profile: action.payload,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone
      }
    case GET_USER_ADDRESSES:
      let address = _.map(action.payload.addresses, (data: any) => {
        return {
          id: data.id,
          address: data.address,
          city: data.city,
          province: data.province,
          postal_code: data.postal_code,
          city_id: data.city_id,
          province_id: data.province_id
        }
      })
      return { ...state, userAddresses: action.payload.addresses, editedUserAddress: address }
    case GET_USER_ADDRESS:
      return {
        ...state,
        address: action.payload.address.address,
        city: action.payload.address.city,
        postal_code: action.payload.address.postal_code,
        city_id: action.payload.address.city_id,
        province_id: action.payload.address.province_id
      }
    case GET_USER_TRANSACTION:
      return { ...state, userTransaction: action.payload.invoices }
    default:
      return state
  }
}
