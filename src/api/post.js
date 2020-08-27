import apiUrl from '../apiConfig'
import axios from 'axios'

export const getUsers = () => {
  return axios(apiUrl + '/users')
}

export const getUser = (id) => {
  return axios(apiUrl + '/users/' + id)
}

export const getUserForPost = id => {
  console.log('this is the ID of the post\'s owner : ', id)
  return axios(apiUrl + '/users/' + id)
}

export const indexPosts = user => {
  return axios({
    url: apiUrl + '/posts',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const deletePost = (user, postId) => {
  return axios({
    url: `${apiUrl}/posts/${postId}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
