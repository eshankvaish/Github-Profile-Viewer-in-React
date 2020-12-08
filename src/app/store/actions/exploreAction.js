import axios from 'axios';

import actionTypes from '../actionTypes';
import { EXPLORE_API } from '../../../constants';
import apiConfig from '../../../service';

const { UPDATE_STATE } = actionTypes;

export const exploreAction = (payload) => (
    {
        type: UPDATE_STATE,
        payload,
    }
);

export const exploreApiAction = (lastIndexId, presentUserData, size) => (
    (dispatch) => {
        axios(apiConfig('get', EXPLORE_API(lastIndexId)))
            .then(({ data }) => {
                // update the state data
                dispatch(exploreAction({
                    userData: [
                        ...presentUserData,
                        ...data.slice(0, size),
                    ],
                    lastIndex: data[size - 1].id,
                    error: '',
                }));
            })
            .catch(() => {
                dispatch(exploreAction({
                    error: 'Something Went Wrong',
                }));
            });
    }
);
