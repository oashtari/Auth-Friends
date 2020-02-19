import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { friendReducer as reducer } from './reducers';

import Login from './components/LogInForm';
import Friends from './components/Friends';
import AddFriendForm from './components/AddFriendForm';
import ProtectedRoute from './components/ProtectedRoute';

const store = createStore(reducer, applyMiddleware(thunk, logger));

function App() {

  return (

    <div className="App">
      <Provider store={store}>
        <Router>
          <Link to='/login'>Log In</Link>
          <br />
          <Link to='/friends'>Protected Friends page</Link>
          <br />
          <Link to='/add'>Want to add a friend?</Link>
          <Switch>
            <ProtectedRoute path='/friends' component={Friends} />
            <ProtectedRoute path='/add' component={AddFriendForm} />
            <Route component={Login} />
            <Route path='/login' component={Login} />
          </Switch>
        </Router>
      </Provider>

    </div>

  )
    ;
}

export default App;