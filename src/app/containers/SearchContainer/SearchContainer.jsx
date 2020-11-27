import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { searchAction, searchApiAction, searchSuggestionAction } from '../../store/actions/searchAction';
import Search from '../../components/Search/Search';
import debounceFunction from '../../utils/debounceFunction';
import { DEBOUNCE_TIME_LIMIT } from '../../../conf';

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
    const debounceSuggestion = useCallback(
        debounceFunction(searchSuggestion, DEBOUNCE_TIME_LIMIT),
        [],
    );

    const [inputState, setInputState] = useState({
        type: 'search',
        label: 'Search Username',
        name: 'username',
        id: 'username',
        placeholder: 'Enter Username',
        className: '',
    });

    const handleChange = (e) => {
        // Update search value in store
        dispatch(searchAction({
            ...searchState,
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
        // Remove the errors and red border
        if (e.target.value) {
            setInputState({
                ...inputState,
                className: '',
                fieldError: '',
            });
        }
    };

    const handleBlur = (e) => {
        if (!e.target.value) {
            setInputState({
                ...inputState,
                className: 'border-red',
                fieldError: 'This field is required!',
            });
        }
        // Remove the suggestion dropdown
        setTimeout(() => (
            dispatch(searchAction({
                suggestions: [],
            }))
        ), 200);
    };

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
            handleChange={handleChange}
            handleBlur={handleBlur}
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
