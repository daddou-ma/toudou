export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';

export const RESET_POST = 'RESET_POST';
export const RESET_NEW_POST= 'RESET_NEW_POST';
export const RESET_ALL_POSTS = 'RESET_ALL_POSTS';

export const FETCH_POST_SUCCEED = 'FETCH_POST_SUCCEED';
export const CREATE_POST_SUCCEED = 'CREATE_POST_SUCCEED';
export const UPDATE_POST_SUCCEED = 'UPDATE_POST_SUCCEED';
export const DELETE_POST_SUCCEED = 'DELETE_POST_SUCCEED';
export const FETCH_ALL_POSTS_SUCCEED = 'FETCH_ALL_POSTS_SUCCEED';

export const FETCH_POST_FAILED = 'FETCH_POST_FAILED';
export const CREATE_POST_FAILED = 'CREATE_POST_FAILED';
export const UPDATE_POST_FAILED = 'UPDATE_POST_FAILED';
export const DELETE_POST_FAILED = 'DELETE_POST_FAILED';
export const FETCH_ALL_POSTS_FAILED = 'FETCH_ALL_POSTS_FAILED';

export function fetchPost(postId) {
    return {
        type: FETCH_POST,
        postId
    };
};

export function createPost(post) {
    return {
        type: CREATE_POST,
        post
    };
};

export function updatePost(post) {
    return {
        type: UPDATE_POST,
        post
    };
};

export function deletePost(postId) {
    return {
        type: DELETE_POST,
        postId
    };
};

export function fetchAllPosts() {
    return {
        type: FETCH_ALL_POSTS
    };
};

export function fetchPostSucceed(post) {
    return {
        type: FETCH_POST_SUCCEED,
        post
    };
};

export function createPostSucceed(post) {
    return {
        type: CREATE_POST_SUCCEED,
        post
    };
};

export function updatePostSucceed(post) {
    return {
        type: UPDATE_POST_SUCCEED,
        post
    };
};

export function deletePostSucceed(postId) {
    return {
        type: DELETE_POST_SUCCEED,
        postId
    };
};

export function fetchAllPostsSucceed(posts) {
    return {
        type: FETCH_ALL_POSTS_SUCCEED,
        posts
    };
};

export function fetchPostFailed(post) {
    return {
        type: FETCH_POST_FAILED,
        post
    };
};

export function createPostFailed(post) {
    return {
        type: CREATE_POST_FAILED,
        post
    };
};

export function updatePostFailed(post) {
    return {
        type: UPDATE_POST_FAILED,
        post
    };
};

export function deletePostFailed(postId) {
    return {
        type: DELETE_POST_FAILED,
        postId
    };
};

export function fetchAllPostsFailed(posts) {
    return {
        type: FETCH_ALL_POSTS_FAILED,
        posts
    };
};