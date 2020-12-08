import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Profile from '../../components/Profile/Profile';
import { fetchLoginAction } from '../../store/actions/loginAction';

const ProfileContainer = ({ loginState }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLoginAction(loginState.username, loginState.authToken));
    }, []);

    return <Profile loginState={loginState} />;
};

ProfileContainer.propTypes = {
    loginState: PropTypes.instanceOf(Object).isRequired,
};

export default ProfileContainer;
