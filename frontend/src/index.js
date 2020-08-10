import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  // check if user has session token in localStorage

  if (localStorage.jwtToken) {
    // if so, set session token in header of all axios requests
    setAuthToken(localStorage.jwtToken);
    // decode user's info from token
    const decodedUser = jwt_decode(localStorage.jwtToken);

    const preloadedState = {
      session: {
        isAuthenticated: true,
        user: decodedUser
      }
    };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    // check whether user has an expired token
    if (decodedUser.exp < currentTime) {
      // if token has expired, logout & redirect to login page
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    // if user has no token configure empty store
    store = configureStore({});
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});