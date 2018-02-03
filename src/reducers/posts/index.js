import { combineReducers } from 'redux';
import postListReducer from './PostListReducer';
import postDetailsReducer from './PostDetailsReducer';

export default combineReducers({
    postList: postListReducer,
    postDetails: postDetailsReducer,
});