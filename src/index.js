import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import {Stores} from './Stores'
import NoMatch from './NoMatch';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


ReactDOM.render(

    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={NoMatch}/>
            <Route path="stores" component={Stores}/>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>,

    document.getElementById('root')
);
