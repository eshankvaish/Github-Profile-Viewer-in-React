import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import logout from '../../actions/logout';

const LogoutContainer = ({history}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout());
        history.push('/login');
    });
    
    return null;
};
export default LogoutContainer;
