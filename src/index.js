import React from 'react';
import ReactDOM from 'react-dom';
import {applyRouterMiddleware, Router, Route, IndexRedirect, browserHistory} from 'react-router';
import Relay from 'react-relay';
import useRelay from 'react-router-relay';
import App from './App';
import Stores from './Stores'
import Catalog from './Catalog'
import NoMatch from './NoMatch';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


ReactDOM.render(

    <Router history={browserHistory} render={applyRouterMiddleware(useRelay)} environment={Relay.Store}>
        <Route path="/" component={App}>
            <IndexRedirect to="/stores" />
            <Route path="/stores" component={Stores.StoresListContainer} queries={Stores.StoresListQueries}/>
            <Route path="/store/:storeId" component={Stores.StoreContainer} queries={Stores.StoreQueries}/>
            <Route path="/catalog" component={Catalog.ItemListContainer} queries={Catalog.ItemListQueries}/>
            <Route path="/catalog/:itemId" component={Catalog.ItemContainer} queries={Catalog.ItemQueries}/>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>,

    document.getElementById('root')
);
