import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { getFriends } from '../actions';

const friendsList = props => {


    const getThoseFriends = e => {
        e.preventDefault();
        props.getFriends();
    };

    return (
        <>
            <h2>Friends will go HERE:</h2>

            <button onClick={getThoseFriends}>Who are your friends?</button>

            {props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                    // <button onClick={getThoseFriends}>Who are your friends?</button>
                    props.friends.map(friend => (
                        <>
                            <div>Friend: {friend.name}</div>
                            <div>Friend's age: {friend.age}</div>
                            <div>Friend's secret email: {friend.email}</div>
                            < br />
                        </>
                    ))
                )}
        </>
    )
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        error: state.error
    }
}
export default connect(
    mapStateToProps,
    { getFriends }
)(friendsList);


                // {/* <div>{smurf.age}</div>
                //             <div>{smurf.height}</div> */}
                // {/* <button>Edit this smurf</button>
                //             <button>DELETE THIS SMURF</button> */}