import axios from 'axios';

import { SEARCH } from '../actionTypes';
import { SEARCH_PROFILE_API, SEARCH_SUGGESTION_API } from '../../../conf';

export const searchAction = (payload) => (
    {
        type: SEARCH,
        payload,
    }
);

export const searchApiAction = (username, history) => (
    (dispatch) => {
        axios(SEARCH_PROFILE_API(username))
            .then(() => {
                history.push(`/${username}`);
                dispatch(searchAction({
                    loading: false,
                }));
            })
            .catch(() => {
                dispatch(searchAction({
                    error: 'No User Found with given Username',
                    loading: false,
                }));
            });
    }
);

export const searchSuggestionAction = (value) => (
    (dispatch) => {
        axios(SEARCH_SUGGESTION_API(value))
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
