import React, { Component } from 'react'
import { getUser } from '../../api/post'
import { withRouter } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import styles from './user.css.js'
import UserPosts from '../Posts/UserPosts.js'

const profile = {
  border: styles.profile.border,
  margin: styles.profile.margin,
  padding: styles.profile.padding
}

const link = {
  margin: styles.link.margin
}

const userInfo = {
  color: styles.userInfo.color
}

const newsFeed = {
  margin: styles.newsFeed.margin
}

class User extends Component {
  constructor (props) {
    super(props)

    console.log('these are the props ', props)

    this.state = {
      user: ''
    }
  }

  componentDidMount () {
    getUser(this.props.match.params.id)
      .then(res => this.setState({ user: res.data.user }))
      .catch(console.error)
  }

  render () {
    const { user } = this.state

    console.log()
    return (
      <div>
        <div className="container" style={profile}>
          <div className="row">
            <div className="col-1">
              <Image src={user.proPic} width="100" height="100" roundedCircle/>
            </div>
          </div>
          <div className="row">
            <div className="col-9" style={userInfo}>
              <h4>{user.firstName} {user.lastName}</h4>
              <h6>@{user.username}</h6>
              <h6>Languages: {user.languages}</h6>
              <h6>Current Position: {user.role}</h6>
              <h6>Years of Experience: {user.yearsOfExp}</h6>
              <h6>City: {user.city}</h6>
              <a style={link} href={user.linkedIn}>LinkedIn</a>
              <a style={link} href={user.gitHub}>GitHub</a>
            </div>
          </div>
          <div className="row" style={newsFeed}>
<<<<<<< HEAD
            <UserPosts style={{ width: '100%' }} user={this.props.user} userId={user._id} />
=======
            { this.props.user._id === user._id ? <Posts style={{ width: '100%' }} user={this.props.user} /> : 'You have\'t made any posts yet!' }
>>>>>>> 2444cc4... Update styling for User & Users component
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(User)
