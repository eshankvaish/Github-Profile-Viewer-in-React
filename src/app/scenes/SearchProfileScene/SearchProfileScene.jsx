import React from 'react';

import SearchProfileContainer from '../../containers/SearchProfileContainer/SearchProfileContainer';

const SearchProfileScene = ({ match }) => (
    <SearchProfileContainer username={match.params} />
);

export default SearchProfileScene;
