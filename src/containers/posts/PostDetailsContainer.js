import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDetails from '../../components/posts/PostDetails';
import { fetchPost } from '../../actions/PostActions';

class PostDetailsContainer extends Component {
    componentWillMount() {
        const { postId } = this.props.match.params;
        this.props.fetchPost(postId);
    }
    render() {
        const { post, error, isLoading } = this.props;

        return (
            <PostDetails post={post}/>
        );
    }
}

const mapStateToProps = (state) => {
    const { post, error, isLoading } = state.posts.postDetails;

    return {
        post,
        error,
        isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: (postId) => {
            dispatch(fetchPost(postId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsContainer);