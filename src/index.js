import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './sass/style.scss';

import Layout from './components/Layout';
import Home from './components/Home';

ReactDOM.render(
  <div>
   <Layout />
    <Home />
  </div>
  , document.querySelector('.app'))
