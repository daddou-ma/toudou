import { call, put, takeEvery } from 'redux-saga/effects'
import {
    FETCH_POST,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    FETCH_ALL_POSTS,
    fetchAllPostsSucceed,
    fetchAllPostsFailed,
} from '../actions/PostActions';

function* fetchAllPosts() {
    try {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = yield response.json();
        yield put(fetchAllPostsSucceed(posts));
     } catch (e) {
        yield put(fetchAllPostsFailed(e));
     }
}

function* postSaga() {
    yield takeEvery(FETCH_ALL_POSTS, fetchAllPosts);
}

export default postSaga;