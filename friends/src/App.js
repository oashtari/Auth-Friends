import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { friendReducer as reducer } from './reducers';

import Friends from './components/Friends';
import LogInForm from './components/LogInForm';

import ProtectedRoute from './components/ProtectedRoute';

const store = createStore(reducer, applyMiddleware(thunk, logger));

function App() {

  return (

    <div className="App">
      <Provider store={store}>
        <Router>
          <Link to='/login'>Log In</Link>
          <br />
          <Link to='/protected'>Protected Friends page</Link>
          <Switch>
            <Route component={LogInForm} />
            <Route path='/login' component={LogInForm} />
            <ProtectedRoute path='/friends' component={Friends} />
          </Switch>
        </Router>
      </Provider>

    </div>

  )
    ;
}

export default App;