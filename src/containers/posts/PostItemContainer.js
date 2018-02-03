import React, { Component } from 'react';
import PostItem from '../../components/posts/PostItem';

class PostItemContainer extends Component {
    render() {
        const post = this.props.post;

        return (
            <PostItem post={post}/>
        );
    }
}

export default PostItemContainer;