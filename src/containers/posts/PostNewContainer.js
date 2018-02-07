import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDetails from '../../components/posts/PostDetails';
import { createPost } from '../../actions/PostActions';

class PostNewContainer extends Component {
    constructor(props) {
        super(props);

        this.createPost = this.createPost.bind(this);
    }
    createPost() {
        this.props.createPost({
            title: 'hellp',
            body: 'bod body bo body',
        });
    }

    render() {
        const { post, message, isLoading } = this.props;

        return (
            <button onClick={this.createPost}>Send REquest</button>
        );
    }
}

const mapStateToProps = (state) => {
    const { post, message, isLoading } = state.posts.postNew;

    return {
        post,
        message,
        isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => {
            dispatch(createPost(post))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostNewContainer);