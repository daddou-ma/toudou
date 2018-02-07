import {
    FETCH_ALL_POSTS,
    FETCH_ALL_POSTS_SUCCEED,
    FETCH_ALL_POSTS_FAILED,
} from '../../actions/PostActions';

const initialState = {
    posts: [],
    message: null,
    isLoading: false,
}

export default function (state = initialState, action) {
    const { type } = action;

    switch(type) {
        case FETCH_ALL_POSTS:
            return {...state, isLoading: true};

        case FETCH_ALL_POSTS_SUCCEED:
            return {...state, posts: action.posts, isLoading: false};

        case FETCH_ALL_POSTS_FAILED:
            return {...state, message: {error: true, message: action.error}, isLoading: false};

        default:
            return state;
    }
};