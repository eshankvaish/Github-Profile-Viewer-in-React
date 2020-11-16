const initialState = {
    username: '',
    auth_token: '',
    avatar: '',
    location: '',
    following_count: null,
    followers_count: null,
    bio: '',
    profile_link: '',
    blog: '',
    email: '',
    isLoggedIn: false
}

const loginReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...action.payload
            }
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
}
export default loginReducer;
