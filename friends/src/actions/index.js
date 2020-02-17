import axiosWithAuth from '../utils/axiosWithAuth';

export const GET_FRIENDS = 'GET_FRIENDS';
export const LOAD_FRIENDS = 'LOAD_FRIENDS';
export const ERROR_FRIENDS = 'ERROR_FRIENDS';

export const ADD_FRIEND = 'ADD_FRIEND';

export const getFriends = () => dispatch => {
    dispatch({ type: GET_FRIENDS });

    setTimeout(() => {
        axiosWithAuth()
            .get(`/friends`)
            .then(res => {
                console.log('are these the friends', res.data);
                dispatch({ type: LOAD_FRIENDS, payload: res.data })
            })
            .catch(err => {
                console.log('friends api hit not working', err)
                dispatch({ type: ERROR_FRIENDS, payload: 'could not get your friends' })
            })
    }, 100)
}

// ADD FRIEND NEEDED

export const addFriend = () => dispatch => {
    dispatch({ type: ADD_FRIEND });

    // setTimeout(() => {
    //     axiosWithAuth()
    //         .get(`/friends`)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }, 1000)
}
