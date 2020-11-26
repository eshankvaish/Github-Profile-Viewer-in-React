import { FOLLOWERS_ERROR } from './actionTypes';

const followersErrorAction = () => (
    {
        type: FOLLOWERS_ERROR,
        payload: {
            error: 'Error Fetching User Followers',
        },
    }
);

export default followersErrorAction;
