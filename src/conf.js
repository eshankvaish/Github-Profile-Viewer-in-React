/* For adding configuration files */
// API config for Github

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const LOGIN_API = (authToken) => ({
    method: 'get',
    url: `${GITHUB_URL}/user`,
    headers: {
        Authorization: `token ${authToken}`,
    },
});

export const SEARCH_PROFILE_API = (username) => ({
    method: 'get',
    url: `${GITHUB_URL}/users/${username}`,
});

export const SEARCH_SUGGESTION_API = (username) => ({
    method: 'get',
    url: `${GITHUB_URL}/search/users?q=${username}`,
});

export const EXPLORE_API = (lastIndexId) => ({
    method: 'get',
    url: `${GITHUB_URL}/users?since=${lastIndexId}`,
});

export const FOLLOW_API = (username, authToken) => ({
    method: 'put',
    url: `${GITHUB_URL}/user/following/${username}`,
    headers: {
        Authorization: `token ${authToken}`,
    },
});

export const FOLLOWERS_API = (username) => ({
    method: 'get',
    url: `${GITHUB_URL}/users/${username}/followers`,
});

export const FOLLOWING_API = (username) => ({
    method: 'get',
    url: `${GITHUB_URL}/users/${username}/following`,
});

export const EXPLORE_USER_DATA_COUNT = 6; // For User count on Explore Page
export const DEBOUNCE_TIME_LIMIT = 1000;
