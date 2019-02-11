import { Action, GET_ALL_BLOG, GET_BLOG } from 'actions/types'

interface State {
  allBlog: any[]
  detailBlog: any
}

const INITIAL_STATE: State = {
  allBlog: [],
  detailBlog: {}
}

const BlogReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case GET_ALL_BLOG:
      return { ...state, allBlog: action.payload.data }
    case GET_BLOG:
      return { ...state, detailBlog: action.payload.data }
    default:
      return state
  }
}

export default BlogReducer
