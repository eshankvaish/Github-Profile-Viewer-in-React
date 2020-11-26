/* For adding configuration files */
// API UrlS for Github
export const LOGIN_API = `${process.env.REACT_APP_GITHUB_URL}/user`;
export const SEARCH_PROFILE_API = (username) => `${process.env.REACT_APP_GITHUB_URL}/users/${username}`;
export const SEARCH_SUGGESTION_API = (username) => `${process.env.REACT_APP_GITHUB_URL}/search/users?q=${username}`;
export const EXPLORE_API = (lastIndexId) => `${process.env.REACT_APP_GITHUB_URL}/users?since=${lastIndexId}`;
export const FOLLOW_API = (username) => `${process.env.REACT_APP_GITHUB_URL}/user/following/${username}`;
export const FOLLOWERS_API = (username) => `${process.env.REACT_APP_GITHUB_URL}/users/${username}/followers`;
export const FOLLOWING_API = (username) => `${process.env.REACT_APP_GITHUB_URL}/users/${username}/following`;
