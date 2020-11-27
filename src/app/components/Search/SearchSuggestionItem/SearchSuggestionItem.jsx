import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './SearchSuggestionItem.scss';

const SearchSuggestionItem = ({ suggestions }) => {
    const suggestionItem = suggestions.map((suggestion) => (
        <li key={suggestion.login} className="suggestion__item">
            <Link to={`/${suggestion.login}`}>{suggestion.login}</Link>
        </li>
    ));

    return suggestionItem;
};

SearchSuggestionItem.propTypes = {
    suggestions: PropTypes.instanceOf(Array),
};

export default SearchSuggestionItem;
