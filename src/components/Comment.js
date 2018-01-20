import React, { Component } from 'react';

class Comment extends Component {
    render() {
        const comment = this.props.comment;

        return (
            <div className="Comment">
                <a href="#">{comment.name}</a>{comment.body}
            </div>
        );
    }
}

export default Comment;