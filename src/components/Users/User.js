import React, { Component } from 'react'
import { getUser } from '../../api/post'
import { withRouter } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import styles from './user.css.js'

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

class User extends Component {
  constructor (props) {
    super(props)

    console.log(props)
    this.state = {
      user: ''
    }
  }

  componentDidMount () {
    // need to pass the user to getUser
    // const user = event.target
    getUser(this.props.match.params.id)
      .then(res => this.setState({ user: res.data.user }))
      .catch(console.error)
  }

  render () {
    const { user } = this.state
    // if (user.active === null) {
    //   return <p>Loading...</p>
    // }

    return (
      <div style={profile}>
        <div className="container">
          <div className="row">
            <div className="col-1">
              <Image src={user.proPic} width="100" height="100" roundedCircle/>
            </div>
          </div>
          <div className="row">
            <div className="col-9">
              <h4>{user.firstName} {user.lastName}</h4>
              <h6 style={userInfo}>{user.username}</h6>
              <h6>Languages: {user.languages}</h6>
              <h6 style={userInfo}>Current Position: {user.role}</h6>
              <h6>Years of Experience: {user.yearsOfExp}</h6>
              <h6>City: {user.city}</h6>
              <a style={link} href={user.linkedIn}>LinkedIn</a>
              <a style={link} href={user.gitHub}>GitHub</a>
            </div>
          </div>
          <div className="row">
            <h6 style={link}>Posts</h6>
          </div>
        </div>
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
