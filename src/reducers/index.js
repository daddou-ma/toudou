import { combineReducers } from 'redux';
import postsReducer from './posts/index';

export default combineReducers({
    posts: postsReducer,
});