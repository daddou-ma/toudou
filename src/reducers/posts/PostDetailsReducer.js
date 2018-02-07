import {
    FETCH_POST,
    FETCH_POST_SUCCEED,
    FETCH_POST_FAILED,
} from '../../actions/PostActions';

const initialState = {
    post: {},
    message: null,
    isLoading: false,
}

export default function (state = initialState, action) {
    const { type } = action;

    switch(type) {
        case FETCH_POST:
            return {...state, isLoading: true};

        case FETCH_POST_SUCCEED:
            return {...state, post: action.post, isLoading: false};

        case FETCH_POST_FAILED:
            return {...state, message: {error: true, message: action.error}, isLoading: false};

        default:
            return state;
    }
};