import { SEARCH_PROFILE } from '../actionTypes';

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
