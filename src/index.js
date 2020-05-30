import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ACTION_TYPES } from './redux/actions';

const INITIAL_STATE = {
};

function reduxStore(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.SAVE_CURRENT_WEATHER:
      return {
        state: action.value
      };
      case ACTION_TYPES.SAVE_FIVE_DAYS_FORECAST: 
        return {
          state: action.value
        };
    default:
      return state
  }
};

let store = createStore(reduxStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
