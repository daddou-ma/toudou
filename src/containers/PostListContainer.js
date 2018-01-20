import React, { Component } from 'react';
import PostList from '../components/PostList';

class PostListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        console.log('did mount');
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(result => result.json())
        .then((data) => {
            this.setState({
                posts: data
            });
        });
    }

    render() {
        const posts = this.state.posts;

        return (
            <PostList posts={posts} />
        );
    }
}

export default PostListContainer;