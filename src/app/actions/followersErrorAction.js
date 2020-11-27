const followersErrorAction = () => (
    {
        type: 'FOLLOWERS_ERROR',
        payload: {
            error: 'Error Fetching User Followers',
        },
    }
);

export default followersErrorAction;
