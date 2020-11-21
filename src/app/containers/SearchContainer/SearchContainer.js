import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import searchApiAction from '../../actions/searchApiAction';
import searchAction from '../../actions/searchAction';
import Search from '../../components/Search/Search';

const SearchContainer = ({history}) => {
    const dispatch = useDispatch();
    const searchState = useSelector(state => state.searchState);

    const [buttonState] = useState({
        type: 'submit',
        label: 'Search'
    });
    const handleChange = (e) => {
        dispatch(searchAction({
            username: e.target.value
        }));
    };
    const [inputState] = useState({
        type: 'search',
        label: 'Search Username',
        name: 'username',
        id: 'username',
        placeholder: 'Enter Username',
        handleChange: handleChange
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchApiAction(searchState.username, history));
    };

    return <Search handleSubmit={handleSubmit} error={searchState.error} inputState={inputState} buttonState={buttonState} />;
};
export default SearchContainer;
