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
    fetchPostFailed,
    createPostSucceed,
    createPostFailed,
    updatePostSucceed,
    updatePostFailed,
    deletePostSucceed,
    deletePostFailed,
} from '../actions/PostActions';

import postApi from '../utils/api/posts';

function* fetchPost(action) {
    try {
        const response = yield postApi.fetch(action.postId);
        const post = yield response.json();
        yield put(fetchPostSucceed(post));
    } catch (e) {
        yield put(fetchPostFailed(e));
    }
}

function* createPost(action) {
    try {
        const response = yield postApi.create(action.post);
        const post = yield response.json();
        yield put(createPostSucceed(post));
    } catch (e) {
        yield put(createPostFailed(e));
    }
}

function* updatePost(action) {
    try {
        const response = yield postApi.update(action.post);
        const post = yield response.json();
        yield put(updatePostSucceed(post));
    } catch (e) {
        yield put(updatePostFailed(e));
    }
}

function* deletePost(action) {
    try {
        const response = yield postApi.update(action.postId);
        const post = yield response.json();
        yield put(deletePostSucceed(post));
    } catch (e) {
        yield put(deletePostFailed(e));
    }
}

function* fetchAllPosts() {
    try {
        const response = yield postApi.fetchAll();
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