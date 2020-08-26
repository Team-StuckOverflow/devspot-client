import React, { Component } from 'react'
import { getUser } from '../../api/post'
import { withRouter } from 'react-router-dom'

class User extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: ''
    }
  }

  componentDidMount (props) {
    // need to pass the user to getUser
    getUser(this.props)
      .then(res => this.setState({ user: res.data.user }))
      .catch(console.error)
  }

  render () {
    const { user } = this.state
    if (user.active === null) {
      return <p>Loading...</p>
    }

    return (
      <div>
        <h4>{user.username}</h4>
        <h6>{user.firstName}</h6>
        <h6>{user.languages}</h6>
        <h6>{user.city}</h6>
        <a href={user.linkedIn}>LinkedIn</a>
        <a href={user.gitHub}>GitHub</a>
      </div>
    )
    // const { user } = this.state
    // console.log('this is user ', user)
    // if (user.active === true) {
    //   return (
    //     <div>
    //       <h4>{user}</h4>
    //     </div>
    // )
  }
}

export default withRouter(User)
