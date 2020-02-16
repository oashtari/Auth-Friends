
import { GET_FRIENDS } from '../actions';

const initialState = {
    friends: [],
    isFetching: false
}

export const friendReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_FRIENDS:
            return {
                ...state,
                isFetching: true,
                friends: []
            }
        default:
            return state;
    }
}