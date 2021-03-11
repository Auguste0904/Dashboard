import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Login from './Login/Login';
import Google from './Oauth/Google/Google';
import Register from './Register/Register';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import Dashboard from './Dashboard/Dashboard'
import NewPassword from './NewPassword/NewPassword'
import Terms from './Terms/Terms';
import Widgets from './Widgets/Widgets';
import Aboutus from './About-us/About-us';

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/forgotPassword">
                    <ForgotPassword />
                </Route>
                <Route exact path="/newPassword">
                    <NewPassword />
                </Route>
                <Route exact path="/terms">
                    <Terms />
                </Route>
                <Route path="/oauth/google">
                    <Google />
                </Route>
                <Route exact path="/aboutus">
                    <Aboutus />
                </Route>
                <Route path="/widgets">
                    <Widgets />
                </Route>
                <Route path="/*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;