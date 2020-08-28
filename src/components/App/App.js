import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
// import Home from '../Home/Home'
import Users from '../Users/Users'
import User from '../Users/User'
import UpdateProfile from '../Update/UpdateProfile'

import Posts from '../Posts/Posts'
import PostCreate from '../PostCreate/PostCreate'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <React.Fragment>
        <Header className='navbar' user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">

          <Route path='/user-info' user={user} render={() => (
            <UpdateProfile msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />

          <Route exact path='/' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />

          <AuthenticatedRoute user={user} exact path='/user/edit-profile' render= {() => (
            <UpdateProfile
              user={user} />
          )}/>

          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/users' render={() => (
            <Users user={user}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/users/:id' render={() => (
            <User user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/posts' render={() => (
            <Posts user={user}/>
          )}/>
          <AuthenticatedRoute exact path='/post-create' user={user} render={() => (
            <PostCreate user={user}/>
          )}/>
        </main>
      </React.Fragment>
    )
  }
}

export default App
