import { Action, GET_ALL_BLOG } from 'actions/types'

interface State {
  allBlog: any[]
}

const INITIAL_STATE: State = {
  allBlog: []
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case GET_ALL_BLOG:
      return { ...state, allBlog: action.payload.data }
    default:
      return state
  }
}
