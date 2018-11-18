import axios from 'axios'
import { Dispatch } from 'redux'
import { GET_ALL_BLOG, GET_BLOG } from './types'

export const getAllBlog = () => async (dispatch: Dispatch<any>) => {
  const res = await axios.get('/blogs')
  await getAllBlogSuccess(dispatch, res)
}

export const getBlog = (id: number) => async (dispatch: Dispatch<any>) => {
  const res = await axios.get(`/blog/${id}`)
  await getBlogSuccess(dispatch, res)
}

const getAllBlogSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_ALL_BLOG,
    payload: res.data
  })
}

const getBlogSuccess = (dispatch: Dispatch<any>, res: any) => {
  dispatch({
    type: GET_BLOG,
    payload: res.data
  })
}
