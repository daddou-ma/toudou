import React, { Component } from 'react';
import CommentContainer from '../containers/CommentContainer';

class Post extends Component {
    render() {
        const post = this.props.post;
        const user = post.user;
        const comments = (this.props.comments.length > 0) ? this.props.comments.map(comment => <CommentContainer key={comment.id} comment={comment} />) : <a href="#" onClick={this.props.fetchComments}>Show Comments</a>;

        return (
            <div className="Post">
                <div className="Post__Header">
                    <h3 className="Post__User">{user.name}</h3>
                </div>
                <div className="Post__Body">
                    <p>{post.body}</p>
                </div>
                <div className="Post__Footer">
                    {comments}
                </div>
            </div>
        );
    }
}

export default Post;