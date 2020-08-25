import apiUrl from '../apiConfig'
import axios from 'axios'

export const getUsers = () => {
  return axios(apiUrl + '/users')
}

export const getUser = ({ user }) => {
  console.log('this is user ', user)
  return axios(apiUrl + '/users/' + user._id)
}

<<<<<<< HEAD
export const getUserForPost = id => {
  console.log('this is the ID of the post\'s owner : ', id)
  return axios(apiUrl + '/users/' + id)
}

=======
>>>>>>> Add Posts component and link to Posts in Header
export const indexPosts = user => {
  return axios({
    url: apiUrl + '/posts',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
