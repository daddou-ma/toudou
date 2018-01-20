import React, { Component } from 'react';
import Comment from '../components/Comment';

class CommentContainer extends Component {
    render() {
        const comment = this.props.comment;

        return (
            <Comment comment={comment}/>
        );
    }
}

export default CommentContainer;