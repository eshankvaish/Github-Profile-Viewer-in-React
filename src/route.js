import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginScene from './app/scenes/LoginScene/LoginScene';
import HomeScene from './app/scenes/HomeScene/HomeScene';
import ProfileScene from './app/scenes/ProfileScene/ProfileScene';
import LogoutScene from './app/scenes/LogoutScene/LogoutScene';
import PrivateRoute from './app/components/PrivateRoute';

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
            {/* Profile Route to be made loggedIn Route in RA-4 */}
            <PrivateRoute exact path="/profile" component={ProfileScene} />
        </Switch>
    );
};
export default Routes;
