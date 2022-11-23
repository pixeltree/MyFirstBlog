import API from './axiosConfig'

const postsApi = {
  getPosts: () => {
    try {
      return API.get('/posts')
    }
    catch (e) {
      console.error(e)
    }
  },
  getPost: (postId) => {
    try {
      return API.get(`/posts/${postId}`)
    }
    catch (e) {
      console.error(e)
    }
  }
}

export default postsApi
