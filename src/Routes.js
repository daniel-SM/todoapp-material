import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import {createBrowserHistory as history } from 'history';

import Todo from './pages/Todo'
import About from './pages/About'

export default () => (
    <div>
        <Router history={history()}>
            <Switch>
                <Route path='/todos' component={Todo}/>
                <Route path='/about' component={About}/>

                <Redirect from='*' to='/todos'/>
            </Switch>
        </Router>
    </div>
);