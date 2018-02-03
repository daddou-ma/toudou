import { call, put, takeEvery } from 'redux-saga/effects'
import {
    FETCH_POST,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    FETCH_ALL_POSTS,
    fetchAllPostsSucceed,
    fetchAllPostsFailed,
    fetchPostSucceed,
    fetchPostFailed
} from '../actions/PostActions';

function* fetchPost(postId) {
    try {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user`);
        const post = yield response.json();
        yield put(fetchPostSucceed(post));
    } catch (e) {
        yield put(fetchPostFailed(e));
    }
}

function* createPost(post) {

}

function* updatePost(post) {
    
}

function* deletePost(postId) {
    
}

function* fetchAllPosts() {
    try {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/posts?_expand=user`);
        const posts = yield response.json();
        yield put(fetchAllPostsSucceed(posts));
     } catch (e) {
        yield put(fetchAllPostsFailed(e));
     }
}

function* postSaga() {
    yield takeEvery(FETCH_POST, fetchPost);
    yield takeEvery(CREATE_POST, createPost);
    yield takeEvery(UPDATE_POST, updatePost);
    yield takeEvery(DELETE_POST, deletePost);
    yield takeEvery(FETCH_ALL_POSTS, fetchAllPosts);
}

export default postSaga;