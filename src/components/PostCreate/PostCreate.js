import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import { indexPosts } from '../../api/post'

// import the api's url
import apiUrl from '../../apiConfig'

// Import axios so we can make HTTP requests
import axios from 'axios'

class PostCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // Add some post state
      post: {
        // set the default body to empty strings
        body: ''

      }
    }
  }

  /* The handleChange event handler, will update our state, when an input's value changes */
  handleChange = event => {
    // by default react will re-use events after the event handler has finished running
    // the updater function we passed to setState will not be run until after handleChange has finished
    // when react re-uses event's, it sets event.target's properties to `null`
    // to prevent React from nullifying those properties, we call `event.persist`
    event.persist()

    // Updating our state will depend on the previous state, so we use the `updater`
    // callback, to get access to our previous state
    this.setState(prevState => {
      // Create an object that represents the change in state
      // event.target.name refers to the input that has changed's name, ex. 'title'
      // the new value, will come from `event.target.value`
      // ex. { title: 1984 }
      const updatedField = { [event.target.name]: event.target.value }

      // copy all of the post's properties onto the newly created object ({})
      // then copy the updated field onto that new object
      const editedPost = Object.assign({}, prevState.post, updatedField)
      // return the state change, of setting the `post` state to its new value of
      // `editedpost`
      return { post: editedPost }
    })
  }

  handleSubmit = event => {
    // prevent the page from refreshing
    event.preventDefault()
    axios({
      url: `${apiUrl}/posts`,
      method: 'POST',
      // send the new value for our post, which comes from `this.state`
      data: { post: this.state.post },
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(() => this.setState({ post: {
        body: ''
      } }))
      .then(() => {
        document.querySelector('.tweetBox').value = ''
      })
      .then(() => indexPosts(this.props.user)
        .then(res => this.props.setPosts(res.data.posts.reverse()))
        .catch(console.error)
      )
      .catch(console.error)
  }

  render () {
    // destructure post to show in the form below, and createdId to redirect
    const { post } = this.state
    const { handleChange, handleSubmit } = this
    const tweetBoxStyling = {
      border: '1px solid gray',
      width: '600px',
      color: 'white'
    }

    return (
      <div style={tweetBoxStyling} className="text">
        <form onSubmit={handleSubmit}>
          <input
            className='tweetBox'
            placeholder='Enter thoughts'
            /* This input's value, will always be post.body */
            value={post.body}
            /* We need to add a name prop, so this input will be properly updated
        in the future w/ handleChange */
            name='body'
            /* Add a change event handler, that will updated our post's state */
            onChange={handleChange}
          />
          <br /><button type='submit'>TWEET</button>
          {/* Link the cancel button to the home page route */}
        </form>
      </div>
    )
  }
}

export default PostCreate
