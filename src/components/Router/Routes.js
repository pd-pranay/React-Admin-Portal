import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Layout from "../Layout/Layout";
import Alert from "../Alert"
// pages
import Error from "../../pages/error/Error";
import Login from "../../pages/login/Login";


import PrivateRoute from './PrivateRoute';

const Routes = () => {
    return (
        <>
            <Alert />
            <Switch>
                <Route exact path='/login' component={Login} />
                <PrivateRoute path="/app" component={Layout} />
                {/* <Route component={NotFound} /> */}
                <Route component={Error} />
            </Switch>
        </>
    );
};

export default Routes;