const initialState = {
    username: '',
    avatar: '',
    location: '',
    following_count: null,
    followers_count: null,
    bio: '',
    profile_link: '',
    blog: '',
    email: '',
    error: ''
};

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
    case 'SEARCH_PROFILE':
        return {
            ...state,
            ...action.payload
        };
    default: return state;
    }
};

export default profileReducer;
