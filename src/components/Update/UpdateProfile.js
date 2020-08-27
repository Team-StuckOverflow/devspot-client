import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UpdateProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        city: '',
        state: '',
        country: '',
        languages: '',
        yearsOfExp: '',
        role: '',
        gitHub: '',
        linkedIn: '',
        proPic: '',
        active: ''
      },
      updated: false
    }
  }

  componentDidMount (req, res, next) {
    console.log('this.state.user ', this.state.user)
    axios({
      url: `${apiUrl}/users/${this.props.user._id}`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => this.setState({ user: res.data.user }))
      .catch(console.error)
  }

  handleChange = event => {
    event.persist()
    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedUser = Object.assign({}, prevState.user, updatedField)
      return { user: editedUser }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/user-info`,
      method: 'PATCH',
      data: { user: this.state.user },
      headers: {
        'Authorization': `Token token=${this.state.user.token}`
      }
    })
      .then(res => this.setState({ updated: true }))
      .catch(console.error)
  }

  render () {
    const { firstName, lastName, city, state, languages, role, yearsOfExp, gitHub, linkedIn, proPic, country, updated } = this.state
    const { handleChange, handleSubmit } = this

    if (updated) {
      return <Redirect to={`/user/${this.props.user._id}`} />
    }

    return (
      <div>
        <h2>Edit Profile</h2>
        <div className="row">
          <div className="col-sm-10 col-md-8 mx-auto mt-5">
            <Form onSubmit={handleSubmit}>

              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  name="firstName"
                  value={firstName}
                  type="text"
                  placeholder="First Name"
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="state">
                <select title="US States" value={state} onChange={handleChange}
                  name="state"
                  required>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
      </div>
    )
  }
}

export default UpdateProfile
