import React, { Component } from 'react';
import PostItemContainer from '../../containers/posts/PostItemContainer';

class PostList extends Component {
    render() {
        const { posts } = this.props;
        const postsComponents = posts.map(post => <PostItemContainer key={post.id} post={post}/>);
        return (
            <div className="PostContainer">
                {postsComponents}
            </div>
        );
    }
}

export default PostList;