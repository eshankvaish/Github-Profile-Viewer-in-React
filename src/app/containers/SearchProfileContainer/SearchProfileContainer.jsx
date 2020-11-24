import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Profile from '../../components/Profile/Profile';
import profileApiAction from '../../actions/profileApiAction';

const SearchProfileContainer = ({ username }) => {
    const userData = useSelector((state) => state.profileState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(profileApiAction(username));
    }, []);
    return <Profile loginState={userData} />;
};

export default SearchProfileContainer;
