import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import searchApiAction from '../../actions/searchApiAction';
import searchAction from '../../actions/searchAction';
import searchSuggestionAction from '../../actions/searchSuggestionAction';
import Search from '../../components/Search/Search';
import debounceFunction from '../../utils/debounceFunction';

const SearchContainer = ({ history }) => {
    const dispatch = useDispatch();
    const searchState = useSelector((state) => state.searchState);

    const [buttonState] = useState({
        type: 'submit',
        label: 'Search',
        containerClassName: 'search-form__submit-button',
    });
    const searchSuggestion = (value) => dispatch(searchSuggestionAction(value));
    // Debounce Function to prevent excessive API calls
    const debounceSuggestion = debounceFunction(searchSuggestion, 1000);

    const handleChange = (e) => {
        dispatch(searchAction({
            username: e.target.value,
        }));
        if (e.target.value) {
            // Get suggestions
            debounceSuggestion(e.target.value);
        } else {
            dispatch(searchAction({
                suggestions: [],
            }));
        }
    };
    const [inputState] = useState({
        type: 'search',
        label: 'Search Username',
        name: 'username',
        id: 'username',
        placeholder: 'Enter Username',
        handleChange,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchAction({
            loading: true,
        }));
        dispatch(searchApiAction(searchState.username, history));
    };

    return (
        <Search
            handleSubmit={handleSubmit}
            error={searchState.error}
            inputState={inputState}
            buttonState={buttonState}
            loading={searchState.loading}
            suggestions={searchState.suggestions}
        />
    );
};

SearchContainer.propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
};

export default SearchContainer;
