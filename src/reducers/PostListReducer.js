import {
    FETCH_POST,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    FETCH_ALL_POSTS,
    FETCH_POST_SUCCEED,
    CREATE_POST_SUCCEED,
    UPDATE_POST_SUCCEED,
    DELETE_POST_SUCCEED,
    FETCH_ALL_POSTS_SUCCEED,
    FETCH_POST_FAILED,
    CREATE_POST_FAILED,
    UPDATE_POST_FAILED,
    DELETE_POST_FAILED,
    FETCH_ALL_POSTS_FAILED,
} from '../actions/PostActions';

const initialState = [];

export function postReducer (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case FETCH_POST:
            // TODO: Call to api
            return state;
            
        case CREATE_POST:
            // TODO: Call to api
            return state;

        case UPDATE_POST:
            // TODO: Call to api
            return state;

        case DELETE_POST:
            // TODO: Call to api
            return state;

        case FETCH_ALL_POSTS:
            // TODO: Call to api
            return state;

        case FETCH_POST_SUCCEED:
            return state;

        case CREATE_POST_SUCCEED:
            return state;

        case UPDATE_POST_SUCCEED:
            return state;

        case DELETE_POST_SUCCEED:
            return state;

        case FETCH_ALL_POSTS_SUCCEED:
            return state;

        case FETCH_POST_FAILED:
            return state;

        case CREATE_POST_FAILED:
            return state;

        case UPDATE_POST_FAILED:
            return state;

        case DELETE_POST_FAILED:
            return state;

        case FETCH_ALL_POSTS_FAILED:
            return state;

        default:
            return state;
    }
};