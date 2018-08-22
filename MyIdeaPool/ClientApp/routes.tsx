import * as React from 'react';
import { Route } from 'react-router-dom';
import LayoutContainer from './components/Layout';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import IdeasList from './components/IdeasList';

export const routes = <LayoutContainer>
    <Route exact path='/' component={ Home as any } />
	<Route exact path='/sign-up' component={ SignUp as any } />
    <Route exact path='/login' component={ Login as any } />
    <Route exact path='/ideas' component={ IdeasList as any } />
</LayoutContainer>;
