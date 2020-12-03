import axios from 'axios';

import { UPDATE_STATE } from '../actionTypes';
import { EXPLORE_API } from '../../../constants';

export const exploreAction = (payload) => (
    {
        type: UPDATE_STATE,
        payload,
    }
);

export const exploreApiAction = (lastIndexId, presentUserData, size) => (
    (dispatch) => {
        axios(EXPLORE_API(lastIndexId))
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
