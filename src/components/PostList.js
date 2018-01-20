import React, { Component } from 'react';
import PostContainer from '../containers/PostContainer';

class PostList extends Component {
    render() {
        const posts = this.props.posts;
        const postsComponents = posts.map(post => <PostContainer key={post.id} post={post}/>);
        return (
            <div className="PostContainer">
                {postsComponents}
            </div>
        );
    }
}

export default PostList;