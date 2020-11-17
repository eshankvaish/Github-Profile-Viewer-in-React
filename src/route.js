import { Route, Switch } from 'react-router-dom';
import Login from './app/components/login';
import Logout from './app/components/logout';
import Profile from './app/components/profile';
import Home from './app/components/home';
import PrivateRoute from './app/components/privateRoute';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <PrivateRoute path="/profile" component={Profile} />
        </Switch>
    );
}
export default Routes;
