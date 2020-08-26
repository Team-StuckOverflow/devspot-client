import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
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
    const postsStyling = {
      border: '1px solid black'
    }

    const posts = this.state.posts.map(post => (
      <Link to={`/posts/${post._id}`} key={post._id}>
        <Container style={postsStyling}>
          <Row>
            <Col xs={2}>
              <img src={post.owner.proPic} width='100' alt="proPic"/>
            </Col>
            <Col>
              <p>{post.owner.firstName} {post.owner.lastName} <span className='username'>@{post.owner.username}</span></p>
              <p>{post.body}</p>
            </Col>
          </Row>
        </Container>
      </Link>
    ))

    return (
      <div>
        <h2>News Feed</h2>
        {posts}
      </div>
    )
  }
}

export default withRouter(Posts)
