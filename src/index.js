import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ACTION_TYPES } from './redux/actions/actions';

const INITIAL_STATE = {
  data: {
    weather: [],
    main: {
      temp: null,
      feels_like: null,
    },
    wind: {
      speed: null,
      deg: null,
    },
    name: "",
  },
  isLoaded: false,
  error: null,
  inputCity: '',
  reduxdata: {},
};

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function reducer(reduxState = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.LOAD_DATA:
      return reduxState = {
        ...reduxState,
        reduxdata: {
          data: action.value
        }
      };
    case ACTION_TYPES.DECREMENT: // change
      return reduxState - 1
    default:
      return reduxState
  }
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
