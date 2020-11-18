import { Route, Switch } from 'react-router-dom';
import Login from './app/components/Login/login';
import Logout from './app/components/logout';
import Profile from './app/components/profile';
import Home from './app/components/home';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            {/* Profile Route to be made loggedIn Route in RA-4 */}
            <Route path="/profile" component={Profile} />
        </Switch>
    );
}
export default Routes;
