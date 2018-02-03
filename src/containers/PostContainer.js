import React, { Component } from 'react';
import Post from '../components/Post';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            comments: [],
        };

        this.fetchComments = this.fetchComments.bind(this);
    }


    fetchComments(e) {
        e.preventDefault();

        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.post.id}/comments`)
        .then(result => result.json())
        .then((data) => {
            this.setState({
                comments: data
            });
        });
    }

    render() {
        const post = this.props.post;
        const comments = this.state.comments;

        return (
            <Post post={post} comments={comments} fetchComments={this.fetchComments}/>
        );
    }
}

export default PostContainer;