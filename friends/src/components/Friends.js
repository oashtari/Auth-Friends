import React from 'react';

import { connect } from 'react-redux';

import { getFriends } from '../actions';

const friends = props => {

    return (
        <>
            <h2>Friends go HERE:</h2>


            {props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                    props.friends.map(friend => (
                        <>
                            <div>{friend.name}</div>
                            {/* <div>{smurf.age}</div>
                            <div>{smurf.height}</div> */}
                            {/* <button>Edit this smurf</button>
                            <button>DELETE THIS SMURF</button> */}
                            <br />
                        </>
                    ))
                )}


        </>
    )
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}
export default connect(
    mapStateToProps,
    { getFriends }
)(friends);