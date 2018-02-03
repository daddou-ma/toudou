import { combineReducers } from 'redux';
import { postsReducer } from './PostListReducer';

export default combineReducers({
    posts: postsReducer,
});