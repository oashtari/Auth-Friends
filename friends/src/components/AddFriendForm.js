import React, { useState } from 'react';

import { connect } from 'react-redux';

import { getFriends, addFriend } from '../actions';

const NewFriendForm = props => {

    const [form, setForm] = useState({ name: '', age: '', email: '' });

    const handleChange = e => {

        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addFriend(form);
        setForm({ name: '', age: '', height: '' });
    }

    // const getThoseFriends = e => {
    //     e.preventDefault();
    //     props.getFriends();
    // };

    return (
        <>
            {props.isFetching ? (
                <h2>Add a friend here</h2>
            ) : (
                    <form onSubmit={handleSubmit}>
                        <input name='name' placeholder="enter Name" onChange={handleChange} value={form.name}></input>
                        <input name='age' placeholder="enter Age" onChange={handleChange} value={form.age}></input>
                        <input name='email' placeholder="enter email" onChange={handleChange} value={form.email}></input>
                        <button type="submit">add new Friend</button>
                    </form>
                )}


        </>
    )
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        isFetching: state.isFetching
    }
}

export default connect(
    mapStateToProps,
    { getFriends, addFriend }
)(NewFriendForm)