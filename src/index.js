import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>
    ,document.getElementById('root'));
//registerServiceWorker();
