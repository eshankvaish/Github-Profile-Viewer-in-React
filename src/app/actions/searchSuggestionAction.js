import axios from 'axios';

import searchAction from './searchAction';
import GITHUB_API_URL from '../../conf';

const searchSuggestionAction = (value) => (
    (dispatch) => {
        axios.get(`${GITHUB_API_URL}search/users?q=${value}`)
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
