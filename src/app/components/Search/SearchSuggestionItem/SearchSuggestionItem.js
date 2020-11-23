import React from 'react';
import PropTypes from 'prop-types';
import './SearchSuggestionItem.scss';

const SearchSuggestionItem = ({suggestions}) => {
    const suggestionItem = suggestions.map(suggestion => 
        <li key={suggestion.login} className="suggestion__item">
            <a href={`/${suggestion.login}`}>{suggestion.login}</a>    
        </li>    
    );

    return suggestionItem;
};

SearchSuggestionItem.propTypes = {
    suggestions: PropTypes.array
};

export default SearchSuggestionItem;
