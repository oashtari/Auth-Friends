
import { GET_FRIENDS, LOAD_FRIENDS, ERROR_FRIENDS, ADD_FRIEND, FRIEND_ADDED, ADD_ERROR } from '../actions';

const initialState = {
    friends: [],
    isFetching: false,
    error: ''
}

export const friendReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_FRIENDS:
            return {
                ...state,
                isFetching: true,
                friends: []
            }
        case LOAD_FRIENDS:
            return {
                ...state,
                isFetching: false,
                friends: action.payload
            }
        case ERROR_FRIENDS:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_FRIEND:
            return {
                ...state,
                isFetching: true
            }
        case FRIEND_ADDED:
            return {
                ...state,
                isFetching: false,
                friends: action.payload
            }
        case ADD_ERROR:
            return {
                ...state,
                isFething: false,
                error: action.payload
            }
        default:
            return state;
    }
}