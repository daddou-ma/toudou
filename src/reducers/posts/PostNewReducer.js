
import {
    CREATE_POST,
    CREATE_POST_SUCCEED,
    CREATE_POST_FAILED,
} from '../../actions/PostActions';

const initialState = {
    post: {},
    message: null,
    isLoading: false,
}

export default function (state = initialState, action) {
    const { type } = action;

    switch(type) {
        case CREATE_POST:
            return {...state, isLoading: true};

        case CREATE_POST_SUCCEED:
            return {...state,  message: {error: false, message: action.post}, isLoading: false};

        case CREATE_POST_FAILED:
            return {...state, message: {error: true, message: action.error}, isLoading: false};

        default:
            return state;
    }
};