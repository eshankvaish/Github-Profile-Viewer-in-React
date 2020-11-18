import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import logout from '../actions/logout';

const Logout = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout());
        props.history.push('/login');
    });
    
    return null;
};
export default Logout;
