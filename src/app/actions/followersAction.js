import { FETCH_FOLLOWERS } from './actionTypes';

const followersAction = (payload) => (
    {
        type: FETCH_FOLLOWERS,
        payload,
    }
);

export default followersAction;
