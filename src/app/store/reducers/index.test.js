import loginReducer from './loginReducer';
import profileReducer from './profileReducer';
import searchReducer from './searchReducer';
import followersReducer from './followersReducer';
import exploreReducer from './exploreReducer';
import {
    FETCH_FOLLOWERS, LOGIN, LOGOUT, SEARCH, SEARCH_PROFILE, UPDATE_STATE,
} from '../actionTypes';

// Login Reducer
describe('Login Reducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            username: '',
            authToken: '',
            avatar: '',
            location: '',
            followingCount: null,
            followersCount: null,
            bio: '',
            profileLink: '',
            blog: '',
            email: '',
            isLoggedIn: false,
            error: 'Something Went Wrong',
            loading: false,
        };
    });

    it('Should return default state', () => {
        const newState = loginReducer(undefined, {});
        const expectedState = {
            username: '',
            authToken: '',
            avatar: '',
            location: '',
            followingCount: null,
            followersCount: null,
            bio: '',
            profileLink: '',
            blog: '',
            email: '',
            isLoggedIn: false,
            error: '',
            loading: false,
        };
        expect(newState).toEqual(expectedState);
    });

    it('Should return login state', () => {
        const expectedState = {
            username: 'testuser',
            authToken: 'testtoken',
            avatar: 'testavatar',
            location: 'test location',
            followingCount: 0,
            followersCount: 0,
            bio: 'test bio',
            profileLink: 'link to profile',
            blog: 'test blog',
            email: 'testemail@email.com',
            isLoggedIn: true,
            error: 'Something went wrong',
            loading: true,
        };
        const newState = loginReducer(undefined, {
            type: LOGIN,
            payload: expectedState,
        });
        expect(newState).toEqual(expectedState);
    });

    it('Should return logout state', () => {
        const expectedState = {
            ...initialState,
            error: '',
        };
        const newState = loginReducer(initialState, {
            type: LOGOUT,
        });
        expect(newState).toEqual(expectedState);
    });
});

// Profile Reducer
describe('Profile Reducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = {
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
    });

    it('Should return default state', () => {
        const newState = profileReducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    it('Should return profile state', () => {
        const expectedState = {
            ...initialState,
            username: 'test user',
            avatar: 'test avatar',
            location: 'test location',
            followingCount: 5,
            followersCount: 6,
            loading: false,
        };
        const newState = profileReducer(undefined, {
            type: SEARCH_PROFILE,
            payload: expectedState,
        });
        expect(newState).toEqual(expectedState);
    });
});

// Search Reducer
describe('Search Reducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            username: '',
            error: '',
            loading: false,
            suggestions: [],
        };
    });

    it('Should return default state', () => {
        const newState = searchReducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    it('Should return profile state', () => {
        const expectedState = {
            ...initialState,
            username: 'test user',
            error: 'Something went wrong',
            loading: true,
            suggestions: [{
                id: 1,
                login: 'test',
            }],
        };
        const newState = searchReducer(undefined, {
            type: SEARCH,
            payload: expectedState,
        });
        expect(newState).toEqual(expectedState);
    });
});

// Followers Reducer
describe('Followers Reducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            loading: true,
            followersData: [],
            error: '',
            title: '',
        };
    });

    it('Should return default state', () => {
        const newState = followersReducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    it('Should return followers state', () => {
        const expectedState = {
            ...initialState,
            username: 'test user',
            error: 'Something went wrong',
            loading: false,
            followersData: [{
                id: 1,
                login: 'test',
            }],
        };
        const newState = followersReducer(undefined, {
            type: FETCH_FOLLOWERS,
            payload: expectedState,
        });
        expect(newState).toEqual(expectedState);
    });
});

// Explore Reducer
describe('Explore Reducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            userData: [],
            lastIndex: 0,
            error: '',
            loading: true,
            success: '',
        };
    });

    it('Should return default state', () => {
        const newState = exploreReducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    it('Should return followers state', () => {
        const expectedState = {
            ...initialState,
            userData: [{
                id: 1,
                login: 'test login',
            }],
            error: 'Something went wrong',
            loading: false,
            lastIndex: 10,
        };
        const newState = exploreReducer(undefined, {
            type: UPDATE_STATE,
            payload: expectedState,
        });
        expect(newState).toEqual(expectedState);
    });
});
