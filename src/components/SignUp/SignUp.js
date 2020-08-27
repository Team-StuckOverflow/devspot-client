import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'
import SignUpForm from '../shared/SignUpForm'

class SignUp extends Component {
  constructor (props) {
    super(props)

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
      .then(() => history.push('/sign-in'))
      .catch(error => {
        this.setState({ email: '', password: '', passwordConfirmation: '', firstName: '', lastName: '', username: '', city: '', state: '', country: '', languages: '', yearsOfExp: '', role: '', gitHub: '', linkedIn: '', proPic: '' })
        msgAlert({
          heading: 'Sign Up Failed with error: ' + error.message,
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { handleChange, onSignUp } = this
    const { email, password, passwordConfirmation, firstName, lastName, username, city, state, languages, role, yearsOfExp, gitHub, linkedIn, proPic, country } = this.state
    return (
      <SignUpForm
        email={email}
        password={password}
        passwordConfirmation={passwordConfirmation}
        firstName={firstName}
        lastName={lastName}
        username={username}
        city={city}
        yearsOfExp={yearsOfExp}
        state={state}
        languages={languages}
        role={role}
        gitHub={gitHub}
        linkedIn={linkedIn}
        proPic={proPic}
        country={country}
        handleChange={handleChange}
        onSignUp={onSignUp}
      />
    )
  }
}

export default withRouter(SignUp)
