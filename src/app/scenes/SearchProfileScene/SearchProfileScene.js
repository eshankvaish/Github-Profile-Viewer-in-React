import React from 'react';
import SearchProfileContainer from '../../containers/SearchProfileContainer/SearchProfileContainer';

const SearchProfileScene = (props) => {
    return <SearchProfileContainer username={props.match.params.username} />;
};

export default SearchProfileScene;
