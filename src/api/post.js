import apiUrl from '../apiConfig'
import axios from 'axios'

export const getUsers = () => {
  return axios(apiUrl + '/users')
}

export const getUser = ({ user }) => {
  console.log('this is user ', user)
  return axios(apiUrl + '/users/' + user._id)
}
