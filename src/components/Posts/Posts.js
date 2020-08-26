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
    const { user } = this.props

    const posts = this.state.posts.map(post => (
      <div key={post._id}>
        <Link to={`/posts/${post._id}`}>
          <h4>{user.username} <span className=''>{user.firstName} {user.lastName}</span></h4>
          <p>{post.body}</p>
        </Link>
      </div>
    ))
    console.log(posts)

    return (
      <div>
        <h2>News Feed</h2>
        {posts}
      </div>
    )
  }
}

export default withRouter(Posts)
