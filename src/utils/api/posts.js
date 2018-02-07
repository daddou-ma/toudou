
import { BASE_URL } from '../config';

export default {
    fetch(postId) {
        return fetch(`${BASE_URL}/posts/${postId}?_expand=user&_embed=comments`);
    },
    create(post) {
        return fetch(`${BASE_URL}/posts`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(post),
        });
    },
    update(post) {
        return fetch(`${BASE_URL}/posts/${post.id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify(post),
        });
    },
    delete(postId) {
        return fetch(`${BASE_URL}/posts/${postId}`, {
            method: 'DELETE',
        });
    },
    fetchAll() {
        return fetch(`${BASE_URL}/posts?_expand=user&_embed=comments`);
    },
};