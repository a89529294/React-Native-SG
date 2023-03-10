import createDataContext from "./createDataContext"
import jsonServer from "../api/jsonServer"

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogPosts":
      return action.payload
    case "edit_blogPost":
      return state.map((post) =>
        post.id === action.payload.id ? { ...post, title: action.payload.title, content: action.payload.content } : post
      )
    case "delete_blogPost":
      return state.filter((post) => post.id !== action.payload)
    default:
      return state
  }
}

const getBlogPosts = (dispatch) => async () => {
  const response = await jsonServer.get("/blogposts")

  dispatch({ type: "get_blogPosts", payload: response.data })
}

const addBlogPost = (dispatch) => async (title, content, callback) => {
  await jsonServer.post("/blogposts", { title, content })

  callback && callback()
}
const editBlogPost = (dispatch) => async (id, title, content, callback) => {
  await jsonServer.put(`/blogposts/${id}`, { title, content })

  dispatch({ type: "edit_blogPost", payload: { title, content, id } })
  callback && callback()
}
const deleteBlogPost = (dispatch) => async (id) => {
  await jsonServer.delete(`blogposts/${id}`)
  dispatch({ type: "delete_blogPost", payload: id })
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    getBlogPosts,
    addBlogPost,
    deleteBlogPost,
    editBlogPost,
  },
  []
)
