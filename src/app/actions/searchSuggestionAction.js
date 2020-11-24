import axios from 'axios';

import searchAction from './searchAction';

const searchSuggestionAction = (value) => (
    (dispatch) => {
        axios.get(`https://api.github.com/search/users?q=${value}`)
            .then(({ data }) => {
                dispatch(searchAction({
                    suggestions: data.items.slice(0, 5),
                }));
            })
            .catch(() => {
                // The dropdown won't display in case of error
                dispatch(searchAction({
                    suggestions: [],
                }));
            });
    }
);

export default searchSuggestionAction;
