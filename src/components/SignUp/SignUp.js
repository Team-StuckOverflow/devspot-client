import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      firstname: '',
      lastname: '',
      city: '',
      state: '',
      languages: '',
      years: '',
      role: '',
      git: '',
      linkedin: '',
      image: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { msgAlert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign Up Success',
        message: messages.signUpSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        msgAlert({
          heading: 'Sign Up Failed with error: ' + error.message,
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password, passwordConfirmation, firstName, lastName, city, state, languages, role, years, gitHub, linkedIn, profilePicture } = this.state

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Sign Up</h3>
          <Form onSubmit={this.onSignUp}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                name="firstName"
                value={firstName}
                type="text"
                placeholder="First Name"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                name="lastname"
                value={lastName}
                type="text"
                placeholder="Last Name"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                name="city"
                value={city}
                type="text"
                placeholder="City"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                required
                name="city"
                value={state}
                type="text"
                placeholder="State"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="languages">
              <Form.Label>Languages</Form.Label>
              <Form.Control
                required
                name="languages"
                value={languages}
                type="text"
                placeholder="Languages"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control
                required
                name="role"
                value={role}
                type="text"
                placeholder="Years in role"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="years">
              <Form.Label>Years of Experience (code)</Form.Label>
              <Form.Control
                required
                name="years"
                value={years}
                type="text"
                placeholder="Years of experience"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="gitHub">
              <Form.Label>GitHub</Form.Label>
              <Form.Control
                required
                name="gitHub"
                value={gitHub}
                type="text"
                placeholder="GitHub link"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="linkedIn">
              <Form.Label>LinkedIn</Form.Label>
              <Form.Control
                required
                name="linkedIn"
                value={linkedIn}
                type="text"
                placeholder="LinkedIn link"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="profilePicture">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                required
                name="profilePicture"
                value={profilePicture}
                type="text"
                placeholder="Link to profile picture"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="passwordConfirmation">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                required
                name="passwordConfirmation"
                value={passwordConfirmation}
                type="password"
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(SignUp)
