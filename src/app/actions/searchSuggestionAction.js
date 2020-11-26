import axios from 'axios';

import searchAction from './searchAction';
import { SEARCH_SUGGESTION_API } from '../../conf';

const searchSuggestionAction = (value) => (
    (dispatch) => {
        axios.get(`${SEARCH_SUGGESTION_API(value)}`)
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
