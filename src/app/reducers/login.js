import modifyLocalStorageItem from "../utils/modifyLocalStorage";

let userState = modifyLocalStorageItem('get', 'userState');
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
if (!userState) {
    userState = initialState;
}

const loginReducer = (state=userState, action) => {
    switch (action.type) {
        case 'LOGIN':
            modifyLocalStorageItem('set', 'userState', {
                ...action.payload
            });
            return {
                ...action.payload
            }
        case 'LOGOUT':
            modifyLocalStorageItem('remove', 'userState');
            return initialState;
        default:
            return state;
    }
}
export default loginReducer;
