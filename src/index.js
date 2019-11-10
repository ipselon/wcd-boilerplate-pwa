import React from 'react';
import ReactDOM from 'react-dom';
import { App, initApp } from './app';
import './index.css';
import * as serviceWorker from './serviceWorker';
import serviceWorkerConfig from './serviceWorkerConfig';

initApp();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register(serviceWorkerConfig);
