import { combineReducers } from 'redux';
import { postReducer } from './PostListReducer';

export default combineReducers({
    posts: postReducer,
});