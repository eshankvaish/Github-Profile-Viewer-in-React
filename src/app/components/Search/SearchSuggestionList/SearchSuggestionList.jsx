import React from 'react';
import PropTypes from 'prop-types';
import './SearchSuggestionList.scss';
import Chip from '../../UI/Chip/Chip';

const SearchSuggestionList = ({ suggestions }) => (
    suggestions.length ? (
        <ul className="search-suggestion">
            <Chip chips={suggestions} />
        </ul>
    ) : ''
);

SearchSuggestionList.propTypes = {
    suggestions: PropTypes.instanceOf(Array).isRequired,
};

export default SearchSuggestionList;
