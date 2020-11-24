import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginScene from './app/scenes/LoginScene/LoginScene';
import HomeScene from './app/scenes/HomeScene/HomeScene';
import ProfileScene from './app/scenes/ProfileScene/ProfileScene';
import LogoutScene from './app/scenes/LogoutScene/LogoutScene';
import PrivateRoute from './app/components/PrivateRoute/PrivateRoute';
import SearchScene from './app/scenes/SearchScene/SearchScene';
import SearchProfileScene from './app/scenes/SearchProfileScene/SearchProfileScene';
import ExploreScene from './app/scenes/ExploreScene/ExploreScene';
import FollowersScene from './app/scenes/FollowersScene/FollowersScene';
import FollowingScene from './app/scenes/FollowingScene/FollowingScene';

const Routes = ({ loginState }) => (
    <Switch>
        <Route
            exact
            path="/"
            render={(props) => (
                <HomeScene {...props} isLoggedIn={loginState.isLoggedIn} />
            )}
        />
        <Route
            exact
            path="/login"
            render={(props) => (
                <LoginScene {...props} loginState={loginState} />
            )}
        />
        <Route exact path="/logout" component={LogoutScene} />
        <PrivateRoute exact path="/profile" component={ProfileScene} loginState={loginState} />
        <Route exact path="/search" component={SearchScene} />
        <PrivateRoute exact path="/explore" component={ExploreScene} authToken={loginState.authToken} />
        <Route exact path="/:username/followers" component={FollowersScene} />
        <Route exact path="/:username/following" component={FollowingScene} />
        <Route exact path="/:username" component={SearchProfileScene} />
    </Switch>
);
export default Routes;
