import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import SignUpForm from '../shared/SignUpForm'
class UpdateProfile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: ''
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/user-info`)
      .then(res => this.setState({ book: res.data.book }))
      .catch(console.error)
  }

  handleChange = event => {
    event.persist()
    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedBook = Object.assign({}, prevState.book, updatedField)
      return { book: editedBook }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/books/${this.props.match.params.id}`,
      method: 'PATCH',
      data: { book: this.state.book }
    })
      .then(res => this.setState({ updated: true }))
      .catch(console.error)
  }

  render () {
    console.log(this.state)
    const { user, updated } = this.state
    const { handleChange, handleSubmit } = this

    if (updated) {
      return <Redirect to={`/user-info/${this.props.match.params.id}`} />
    }
    return (
      <div>
        <h2>Edit Profile</h2>
        <SignUpForm
          user={user}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    )
  }
}

export default UpdateProfile
