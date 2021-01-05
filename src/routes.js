import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Blog from './pages/Blog'
import Team from './pages/Team'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/product' exact>
                    <Product />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;