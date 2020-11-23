import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginScene from './app/scenes/LoginScene/LoginScene';
import HomeScene from './app/scenes/HomeScene/HomeScene';
import ProfileScene from './app/scenes/ProfileScene/ProfileScene';
import LogoutScene from './app/scenes/LogoutScene/LogoutScene';
import PrivateRoute from './app/components/PrivateRoute';
import SearchScene from './app/scenes/SearchScene/SearchScene';
import SearchProfileScene from './app/scenes/SearchProfileScene/SearchProfileScene';
import ExploreScene from './app/scenes/ExploreScene/ExploreScene';

const Routes = ({loginState}) => {
    return (
        <Switch>
            <Route exact
                path="/"
                render={(props) => (
                    <HomeScene {...props} isLoggedIn={loginState.isLoggedIn} />
                )}
            />
            <Route exact
                path="/login"
                render={(props) => (
                    <LoginScene {...props} loginState={loginState} />
                )}
            />
            <Route exact path="/logout" component={LogoutScene} />
            <PrivateRoute exact path="/profile" component={ProfileScene} loginState={loginState} />
            <Route exact path="/search" component={SearchScene} />
            <PrivateRoute exact path="/explore" component={ExploreScene} auth_token={loginState.auth_token} />
            <Route exact path="/:username" component={SearchProfileScene} />
        </Switch>
    );
};
export default Routes;
