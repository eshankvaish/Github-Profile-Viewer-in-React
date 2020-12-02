import { SEARCH_PROFILE } from '../actionTypes';

const initialState = {
    username: '',
    avatar: '',
    location: '',
    followingCount: null,
    followersCount: null,
    bio: '',
    profileLink: '',
    blog: '',
    email: '',
    error: '',
    loading: true,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
    case SEARCH_PROFILE:
        return {
            ...state,
            ...action.payload,
            loading: false,
        };
    default: return state;
    }
};

export default profileReducer;
