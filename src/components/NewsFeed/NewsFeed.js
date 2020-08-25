import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
// placeholder for user, delete when user is created
let user
class NewsFeed extends Component {
  constructor (props) {
    super(props)
    console.log(props.body)
    this.state = {

      posts: []
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/news-feed`)
      .then(res => this.setState({ posts: res.data.posts }))
      .catch(console.error)
  }

  render () {
    const posts = this.state.posts.map(post => (
      <li key={post._id}>
        <Link to={`/news-feed/${user._id}`}>
          {post.title}
        </Link>
      </li>
    ))

    return (
      <div>
        <h4>News Feed</h4>
        <ul>
          <h1>nice</h1>
          {posts}
        </ul>
      </div>
    )
  }
}

export default NewsFeed
