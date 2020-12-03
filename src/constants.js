/* For adding configuration files */
// API config for Github

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const LOGIN_API = `${GITHUB_URL}/user`;
export const SEARCH_PROFILE_API = (username) => `${GITHUB_URL}/users/${username}`;
export const SEARCH_SUGGESTION_API = (username) => `${GITHUB_URL}/search/users?q=${username}`;
export const EXPLORE_API = (lastIndexId) => `${GITHUB_URL}/users?since=${lastIndexId}`;
export const FOLLOW_API = (username) => `${GITHUB_URL}/user/following/${username}`;
export const FOLLOWERS_API = (username) => `${GITHUB_URL}/users/${username}/followers`;
export const FOLLOWING_API = (username) => `${GITHUB_URL}/users/${username}/following`;
export const EXPLORE_USER_DATA_COUNT = 6; // For User count on Explore Page
export const DEBOUNCE_TIME_LIMIT = 1000;
