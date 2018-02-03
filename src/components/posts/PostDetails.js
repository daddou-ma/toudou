import React, { Component } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

class PostItem extends Component {
    render() {
        const post = this.props.post;
        const user = post.user;

        return (
            <div>
                <Card>
                    <CardHeader>{user.name}</CardHeader>
                    <CardBody>
                        <CardTitle>{post.title}</CardTitle>
                        <CardText>{post.body}</CardText>
                        <Button>Read more</Button>
                    </CardBody>
                    <CardFooter>Comments</CardFooter>
                </Card>
                <br />
            </div>
        );
    }
}

export default PostItem;