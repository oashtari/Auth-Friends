import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => dispatch => {
    dispatch({ type: GET_FRIENDS });

    setTimeout(() => {
        axios
            .get(`http://localhost:5000`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, 1000)
}
