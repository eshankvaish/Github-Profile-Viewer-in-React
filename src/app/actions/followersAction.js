const followersAction = (payload) => {
    return {
        type: 'FETCH_FOLLOWERS',
        payload
    };
};

export default followersAction;
