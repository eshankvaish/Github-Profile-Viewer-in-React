import { UPDATE_STATE } from './actionTypes';

const exploreAction = (payload) => (
    {
        type: UPDATE_STATE,
        payload,
    }
);

export default exploreAction;
