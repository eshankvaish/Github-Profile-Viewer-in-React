import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import loginAction from '../../actions/loginAction';
import fetchLoginAction from '../../actions/fetchLoginAction';
import Login from '../../components/Login/Login';

const LoginContainer = ({history, loginState}) => {
    useEffect(() => {
        if (loginState.isLoggedIn) {
            history.push('/profile');
        }
    }, [loginState.isLoggedIn]);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(loginAction({
            [e.target.id]: e.target.value
        }));
    };

    //Input Field State
    const [inputFieldState] = useState([
        {
            containerClassName: 'login__form--field',
            id: 'username',
            name: 'Username',
            label: 'Username',
            type: 'text',
            className: 'login__form--input',
            placeholder: 'Enter Username',
            handleChange: handleChange,
        },
        {
            containerClassName: 'login__form--field',
            id: 'auth_token',
            name: 'auth_token',
            label: 'Personal Access Token',
            type: 'password',
            className: 'login__form--input',
            placeholder: 'Enter Access Token',
            handleChange: handleChange,
        }
    ]);
    //Submit Button
    const [buttonState] = useState([
        {
            type: 'submit',
            label: 'Login',
            className: 'login__form--submit',
            containerClassName: 'login__form--field login__form--submit-field',
            id: 'login-button'
        }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault(); //Prevent Default Submit Action
        dispatch(fetchLoginAction(loginState.username, loginState.auth_token));
    };

    return (
        <Login 
            inputFieldState={inputFieldState}
            buttonState={buttonState}
            handleSubmit={handleSubmit}
            error={loginState.error}
        />
    );
};
export default LoginContainer;
