import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { indexPosts } from '../../api/post'

class Posts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount () {
    indexPosts(this.props.user)
      .then(res => this.setState({ posts: res.data.posts }))
      .catch(console.error)
  }

  render () {
    const posts = this.state.posts.map(post => (
      <p key={post._id}>
        <Link to={`/posts/${post._id}`}>
          {post.body}
        </Link>
      </p>
    ))
    console.log(posts)

    return (
      <div>
        {posts}
      </div>
    )
  }
}

export default withRouter(Posts)
