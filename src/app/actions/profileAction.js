import { SEARCH_PROFILE } from './actionTypes';

const profileAction = (payload) => (
    {
        type: SEARCH_PROFILE,
        payload,
    }
);

export default profileAction;
