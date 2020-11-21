import loginReducer from './loginReducer';
import searchReducer from './searchReducer';
import { combineReducers } from 'redux';
import exploreReducer from './exploreReducer';

const allReducers = combineReducers({
    loginReducer,
    searchState: searchReducer,
    exploreState: exploreReducer
});
export default allReducers;
