import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Container, Row, Col, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap'
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
      border: '1px solid gray',
      width: '600px',
      color: 'white'
    }

    const posts = this.state.posts.map(post => (
      <Link to={`/posts/${post._id}`} key={post._id}>
        <Container style={postsStyling} className='post-hover pb-5'>
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
                    <Dropdown.Item eventKey="2">Delete</Dropdown.Item>
                  </DropdownButton>
                </div>
                : null }
              <div>{post.body}</div>
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
