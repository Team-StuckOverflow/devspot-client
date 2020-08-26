import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'
import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      username: '',
      city: '',
      state: '',
      country: '',
      languages: '',
      yearsOfExp: '',
      role: '',
      gitHub: '',
      linkedIn: '',
      proPic: '',
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
    const { email, password, passwordConfirmation, firstName, lastName, username, city, state, languages, role, yearsOfExp, gitHub, linkedIn, proPic, country } = this.state
    console.log(this.state)
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
                name="lastName"
                value={lastName}
                type="text"
                placeholder="Last Name"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                name="username"
                value={username}
                type="text"
                placeholder="Username"
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
              <select title="US States" value={state} onChange={this.handleChange}
                name="state"
                required>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="">Connecticut</option>
                <option value="">Delaware</option>
                <option value="FL">Florida</option>
                <option value="">Georgia</option>
                <option value="">Hawaii</option>
                <option value="">Idaho</option>
                <option value="">Illinois</option>
                <option value="">Indiana</option>
                <option value="">Iowa</option>
                <option value="">Kansas</option>
                <option value="">Kentucky</option>
                <option value="">Louisiana</option>
                <option value="">Maine</option>
                <option value="">Maryland</option>
                <option value="">Massachusetts</option>
                <option value="">Michigan</option>
                <option value="">Minnesota</option>
                <option value="">Mississippi</option>
                <option value="">Missouri</option>
                <option value="">Montana</option>
                <option value="">Nebraska</option>
                <option value="">Nevada</option>
                <option value="">New Hampshire</option>
                <option value="">New Jersey</option>
                <option value="">New Mexico</option>
                <option value="">New York</option>
                <option value="">North Carolina</option>
                <option value="">North Dakota</option>
                <option value="">Ohio</option>
                <option value="">Oklahoma</option>
                <option value="">Oregon</option>
                <option value="">Pennsylvania</option>
                <option value="">Rhode Island</option>
                <option value="">South Carolina</option>
                <option value="">South Dakota</option>
                <option value="">Tenessee</option>
                <option value="">Texas</option>
                <option value="">Utah</option>
                <option value="">Vermont</option>
                <option value="">Virginia</option>
                <option value="">Washington</option>
                <option value="">West Virginia</option>
                <option value="">Wisconsin</option>
                <option value="">Wyoming</option>
              </select>
            </Form.Group>

            <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                required
                name="country"
                value={country}
                type="text"
                placeholder="Country"
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

            <Form.Group controlId="yearsOfExp">
              <Form.Label>Years of Experience (code)</Form.Label>
              <Form.Control
                required
                name="yearsOfExp"
                value={yearsOfExp}
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

            <Form.Group controlId="proPic">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                required
                name="proPic"
                value={proPic}
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
