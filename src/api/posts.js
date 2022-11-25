import API from './axiosConfig'

const postsApi = {
  getPosts: () => {
    try {
      return API.get('/posts/')
        .then((res) => res.data)
    }
    catch (e) {
      console.error(e)
      return []
    }
  },
  getPost: (postSlug) => {
    try {
      return API.get(`/posts/${postSlug}`)
        .then((res) => res.data)
    }
    catch (e) {
      console.error(e)
      return []
    }
  }
}

export default postsApi
