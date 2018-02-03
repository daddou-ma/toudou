import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostList from '../../components/posts/PostList';
import { fetchAllPosts } from '../../actions/PostActions';

class PostListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.props.fetchAllPosts();
    }

    render() {
        const posts = this.props.posts;

        return (
            <PostList posts={posts} />
        );
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts.posts}
};

const mapDispatchToProps = (dispatch, props) => ({
    fetchAllPosts: () => {
      dispatch(fetchAllPosts())
    }
  })


export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);