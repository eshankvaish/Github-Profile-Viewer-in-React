import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { loginAction, fetchLoginAction } from '../../store/actions/loginAction';
import Login from '../../components/Login/Login';

const LoginContainer = ({ history, loginState }) => {
    useEffect(() => {
        if (loginState.isLoggedIn) {
            history.push('/profile');
        }
    }, [loginState.isLoggedIn]);

    const dispatch = useDispatch();

    // Input Field State
    const [inputFieldState, setInputFieldState] = useState({
        username: {
            containerClassName: 'login-form__field',
            id: 'username',
            name: 'Username',
            label: 'Username',
            type: 'text',
            placeholder: 'Enter Username',
            value: '',
            fieldError: '',
        },
        authToken: {
            containerClassName: 'login-form__field',
            id: 'authToken',
            name: 'authToken',
            label: 'Personal Access Token',
            type: 'password',
            placeholder: 'Enter Access Token',
            value: '',
            fieldError: '',
        },
    });

    const handleChange = (e) => {
        if (e.target.value) {
            setInputFieldState({
                ...inputFieldState,
                [e.target.id]: {
                    ...inputFieldState[e.target.id],
                    value: e.target.value,
                    className: 'login-form__input',
                    fieldError: '',
                },
            });
        } else {
            setInputFieldState({
                ...inputFieldState,
                [e.target.id]: {
                    ...inputFieldState[e.target.id],
                    value: e.target.value,
                },
            });
        }
    };

    const handleBlur = (e) => {
        if (!e.target.value) {
            setInputFieldState({
                ...inputFieldState,
                [e.target.id]: {
                    ...inputFieldState[e.target.id],
                    className: 'login-form__input border-red',
                    fieldError: 'This field is required!',
                },
            });
        }
    };

    // Submit Button
    const [buttonState] = useState({
        type: 'submit',
        label: 'Login',
        className: 'login-form__submit',
        containerClassName: 'login-form__field login-form__field--submit',
        id: 'login-button',
    });

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent Default Submit Action
        dispatch(loginAction({
            loading: true,
        }));

        dispatch(fetchLoginAction(inputFieldState.username.value, inputFieldState.authToken.value));
    };

    return (
        <Login
            inputFieldState={inputFieldState}
            buttonState={buttonState}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={loginState.error}
            loading={loginState.loading}
            username={inputFieldState.username.value}
            authToken={inputFieldState.authToken.value}
        />
    );
};

LoginContainer.propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    loginState: PropTypes.instanceOf(Object).isRequired,
};

export default LoginContainer;
