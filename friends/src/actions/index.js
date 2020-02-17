import axiosWithAuth from '../utils/axiosWithAuth';

export const GET_FRIENDS = 'GET_FRIENDS';
export const LOAD_FRIENDS = 'LOAD_FRIENDS';
export const ERROR_FRIENDS = 'ERROR_FRIENDS';

export const ADD_FRIEND = 'ADD_FRIEND';
export const FRIEND_ADDED = 'FRIEND_ADDED';
export const ADD_ERROR = 'ADD_ERROR';

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

export const addFriend = friend => dispatch => {
    dispatch({ type: ADD_FRIEND });

    setTimeout(() => {
        axiosWithAuth()
            .post(`/friends`, friend)
            .then(res => {
                console.log(res);
                dispatch({ type: FRIEND_ADDED, payload: res.data })
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: ADD_ERROR, payload: "could not add your friend" })
            })
    }, 1000)
}


// export const addSmurf = friend => dispatch => {
//     dispatch({ type: ADD_SMURF });

//     setTimeout(() => {
//         axios
//             .post(`/friends`, friend)
//             .then(res => {
//                 console.log(res);
//                 dispatch({ type: SMURF_ADDED_SUCCESS, payload: res.data })
//             })
//             .catch(err => {
//                 console.log(err);
//                 dispatch({ type: SMURF_ADD_ERROR, payload: "couldn't add your smurf" })
//             })
//     }, 1000)
// }