import { combineReducers } from 'redux';
import postListReducer from './PostListReducer';
import postDetailsReducer from './PostDetailsReducer';
import postNewReducer from './PostNewReducer';

export default combineReducers({
    postList: postListReducer,
    postDetails: postDetailsReducer,
    postNew: postNewReducer,
});