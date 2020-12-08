import actionTypes from '../actionTypes';

const { LOGOUT } = actionTypes;
const logoutAction = () => (
    {
        type: LOGOUT,
    }
);
export default logoutAction;
