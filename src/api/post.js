import apiUrl from '../apiConfig'
import axios from 'axios'

export const getUsers = () => {
  return axios(apiUrl + '/users')
}

export const getUser = ({ user }) => {
  console.log('this is user ', user)
  return axios(apiUrl + '/users/' + user._id)
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

export const indexPosts = user => {
  return axios({
    url: apiUrl + '/posts',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
