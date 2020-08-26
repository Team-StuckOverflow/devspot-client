import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getUsers } from '../../api/post'

class Users extends Component {
  // show all the users
  // map over each user and display their username as a link
  constructor (props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount () {
    getUsers(this.state)
      .then(res => this.setState({ users: res.data.users }))
      .catch(console.error)
  }

  render () {
    const users = this.state.users.map(user => (
      <li key={user._id}>
        <Link to={`/users/${user._id}`}>{user.username}</Link>
      </li>
    ))

    return (
      <div>
        <h5>Users</h5>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

export default Users
