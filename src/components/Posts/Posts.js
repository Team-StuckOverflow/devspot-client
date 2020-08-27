import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Container, Row, Col, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap'
import { indexPosts, deletePost } from '../../api/post'

class Posts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: [],
      deleted: false
    }
  }

  componentDidMount () {
    indexPosts(this.props.user)
      .then(res => this.setState({ posts: res.data.posts.reverse() }))
      .catch(console.error)
  }

  onDeletePost = event => {
    deletePost(this.props.user, event.target.dataset.postid)
      // After successful delete, call another index request to re-render posts
      .then(() => indexPosts(this.props.user)
        .then(res => this.setState({ posts: res.data.posts.reverse() }))
        .catch(console.error)
      )
      .catch(console.error)
  }

  render () {
    const postsStyling = {
      width: '600px',
      color: 'white',
      border: '1px solid black'
    }

    const posts = this.state.posts.map(post => (
      <Link to={`/posts/${post._id}`} key={post._id}>
        <Container style={postsStyling} className='post-hover pb-5 pt-2'>
          <Row>
            <Col xs={2}>
              <img src={post.owner.proPic} width='75' alt="proPic"/>
            </Col>
            <Col>
              <div style={{ display: 'inline-block' }}><span style={{ fontWeight: 'Bold' }}>{post.owner.firstName} {post.owner.lastName}</span> <span className='username' style={{ color: 'grey' }}>@{post.owner.username}</span></div>
              { this.props.user._id === post.owner._id
                ? <div style={{ display: 'inline-block', float: 'right' }}>
                  <DropdownButton
                    as={ButtonGroup}
                    id='posts-dropdown'
                    size="sm"
                    variant="secondary"
                    title=""
                  >
                    <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                    <Dropdown.Item onClick={this.onDeletePost} data-postid={post._id} eventKey="2">Delete</Dropdown.Item>
                  </DropdownButton>
                </div>
                : null }
            </Col>
            <div>{post.body}</div>
            <Col width="100%">
              <p>{post.owner.firstName} {post.owner.lastName} <span className='username'>@{post.owner.username}</span></p>
              <p>{post.body}</p>
            </Col>
          </Row>
        </Container>
      </Link>
    ))

    return (
      <div style={{ color: 'white' }}>
        <h2 style={{ textAlign: 'center' }}>Live Feed</h2>
        {posts}
      </div>
    )
  }
}

export default withRouter(Posts)
