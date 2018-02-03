import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostList from '../../components/posts/PostList';
import { fetchAllPosts } from '../../actions/PostActions';

import { Alert } from 'reactstrap';

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
        const { posts, isLoading, error } = this.props;
        return (
            <div>
                {error.error && (<Alert color="danger">Cannot fetch data from server</Alert>)}
                {isLoading ? 
                    (<Alert color="secondary">Loading ...</Alert>) : 
                    (<PostList posts={posts} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { posts, error, isLoading } = state.posts.postList;
    return {
        posts,
        error,
        isLoading,
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    fetchAllPosts: () => {
      dispatch(fetchAllPosts())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);