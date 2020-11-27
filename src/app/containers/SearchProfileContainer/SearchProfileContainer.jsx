import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Profile from '../../components/Profile/Profile';
import { profileApiAction } from '../../store/actions/profileAction';

const SearchProfileContainer = ({ match }) => {
    const userData = useSelector((state) => state.profileState);
    const dispatch = useDispatch();
    const { username } = match.params;

    useEffect(() => {
        dispatch(profileApiAction(username));
    }, []);
    return <Profile loginState={userData} />;
};

SearchProfileContainer.propTypes = {
    match: PropTypes.instanceOf(Object).isRequired,
};

export default SearchProfileContainer;
