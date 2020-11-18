import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginScene from './app/scenes/LoginScene/LoginScene';
import Logout from './app/components/logout';
import Profile from './app/components/profile';
import Home from './app/components/home';

const Routes = ({loginState}) => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route 
                path="/login"
                render={(props) => (
                    <LoginScene {...props} loginState={loginState} />
                )}
            />
            <Route path="/logout" component={Logout} />
            {/* Profile Route to be made loggedIn Route in RA-4 */}
            <Route path="/profile" component={Profile} />
        </Switch>
    );
};
export default Routes;
