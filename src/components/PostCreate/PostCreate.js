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
      },
      // Initially, the post has not been created, when it has been created, we will
      // keep track of the post's id, so we can redirect to it later
      createdId: null
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

      console.log('updatedField is', updatedField)
      console.log('editedPost is', editedPost)

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
      // if we succesfully created the post, set the `createdId` state to the id
      // of the post we got back in the response's data
      .then(() => indexPosts(this.props.user)
        .then(res => this.setState({ posts: res.data.posts.reverse() }))
        .catch(console.error)
      )
      .catch(console.error)
  }

  render () {
    // destructure post to show in the form below, and createdId to redirect
    const { post } = this.state
    const { handleChange, handleSubmit } = this

    // when the user hits submit to finish editing the post
    // if (createdId) {
    // redirect to the show page (route)
    // return <Redirect to='/posts' />
    // }

    return (
      <div className="text">
        <form onSubmit={handleSubmit}>
          <input
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
