import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory} from 'react-router';

import './sass/style.scss';

import Layout from './components/Layout';
import Home from './components/Home';

import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(logger(),ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.app'))
