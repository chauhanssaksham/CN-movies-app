import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';

import * as serviceWorker from './serviceWorker';
import './index.css';
import rootReducer from './reducers'
import { RootStateType } from './types.d';
import logger from './middleware/logger';
import thunk from 'redux-thunk';
import { AppActions } from './actions';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';


const store = createStore<RootStateType, AppActions, any, any>(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <CssBaseline />
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
