import React, { useState } from 'react';

import { connect } from 'react-redux';

import { getFriends } from '../actions';

const LogInForm = props => {

    const [form, setForm] = useState({ email: '', password: '' });


    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault();

    }


    return (

        <>
            {props.isFetching ? (
                <h2>Let's see those friends</h2>
            ) : (
                    <button onClick={getFriends}>Fetch your friends</button>
                )}

            <form onSubmit={handleSubmit}>
                <input name='email' placeholder="enter email" onChange={handleChange} value={form.email}></input>
                <input name='password' placeholder="enter password" onChange={handleChange} value={form.password}></input>
                <button type="submit">click THIS to log in</button>
            </form>
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
    { getFriends }
)(LogInForm)

// const NewSmurfForm = props => {

//     const [form, setForm] = useState({ name: '', age: '', height: '' });

//     const handleChange = e => {

//         setForm({ ...form, [e.target.name]: e.target.value });
//     }

//     const handleSubmit = e => {
//         e.preventDefault();
//         props.addSmurf(form);
//         setForm({ name: '', age: '', height: '' });
//     }

//     const getDemSmurfs = e => {
//         e.preventDefault();
//         props.getSmurfs();
//     };

//     return (
        // <>
        //     {props.isFetchingSmurfs ? (
        //         <h2>Let's see some smurfs</h2>
        //     ) : (
        //             <button onClick={getDemSmurfs}>Fetch those Smurfs</button>
        //         )}

        //     <form onSubmit={handleSubmit}>
        //         <input name='name' placeholder="enter Name" onChange={handleChange} value={form.name}></input>
        //         <input name='age' placeholder="enter Age" onChange={handleChange} value={form.age}></input>
        //         <input name='height' placeholder="enter Height" onChange={handleChange} value={form.height}></input>
        //         <button type="submit">add new Smurf</button>
        //     </form>
        // </>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         smurfs: state.smurfs,
//         isFetchingSmurfs: state.isFetchingSmurfs
//     }
// }

// export default connect(
//     mapStateToProps,
//     { getSmurfs, addSmurf }
// )(NewSmurfForm)



