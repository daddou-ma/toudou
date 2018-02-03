import React, { Component } from 'react';
import PostDetails from '../../components/posts/PostDetails';

class PostDetailsContainer extends Component {
    render() {
        const post = {
            user: {
                name: 'hmida',
            },
            title: 'tiitndfmglm',
            body: 'bodydaihf',
        };

        return (
            <PostDetails post={post}/>
        );
    }
}

export default PostDetailsContainer;