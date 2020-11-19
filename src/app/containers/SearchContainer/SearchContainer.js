import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import Search from '../../components/Search/Search';

const SearchContainer = ({history}) => {
    const [error, setError] = useState({
        error: ''
    });
    const [buttonState] = useState({
        type: 'submit',
        label: 'Search'
    });
    const [inputState] = useState({
        type: 'search',
        label: 'Search Username',
        name: 'username',
        id: 'username',
        placeholder: 'Enter Username'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let username = document.querySelector('#username').value;
        let config = {
            method: 'get',
            url: 'https://api.github.com/users/' + username
        };
        axios(config)
            .then(() => {
                history.push(`/${username}`);
            })
            .catch(() => {
                setError({
                    ...error,
                    error: 'No User Found with given Username'
                });
            });
    };

    return <Search handleSubmit={handleSubmit} error={error.error} inputState={inputState} buttonState={buttonState} />;
};
export default SearchContainer;
