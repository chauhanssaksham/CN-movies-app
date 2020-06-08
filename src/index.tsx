import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, Store, applyMiddleware} from 'redux';

import * as serviceWorker from './serviceWorker';
import './index.css';
import rootReducer from './reducers'
import { RootStateType } from './types.d';
import logger from './middleware/logger';

const store:Store<RootStateType> = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
