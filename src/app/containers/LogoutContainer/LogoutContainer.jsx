import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import logoutAction from '../../store/actions/logoutAction';

const LogoutContainer = ({ history }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logoutAction());
        history.push('/login');
    });

    return null;
};
export default LogoutContainer;
