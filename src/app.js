require('whatwg-fetch');

import {browserHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';
import App from 'containers/App/App';
import makeRoutes from './routes';

const routes = makeRoutes();

const mountNode = document.querySelector('#root');
ReactDOM.render(
  <App
    history={browserHistory}
    routes={routes} />, mountNode);
