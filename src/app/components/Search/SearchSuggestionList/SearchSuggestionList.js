import React from 'react';
import PropTypes from 'prop-types';
import './SearchSuggestionList.scss';
import SearchSuggestionItem from '../SearchSuggestionItem/SearchSuggestionItem';

const SearchSuggestionList = ({suggestions}) => {
    return suggestions.length ? (
        <ul className="search-suggestion">
            <SearchSuggestionItem suggestions={suggestions} />
        </ul>
    ) : '';
};

SearchSuggestionList.propTypes = {
    suggestions: PropTypes.array
};

export default SearchSuggestionList;

