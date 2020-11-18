import React from 'react';
import './LoginForm.scss';
import LoginButton from '../LoginButton/LoginButton';
import LoginInputField from '../LoginInputField/LoginInputField';

const LoginForm = ({inputFieldState, buttonState, handleSubmit}) => {
    return (
        <form className="login__form" onSubmit={handleSubmit}>
            <LoginInputField inputFieldState={inputFieldState} />
            <LoginButton buttonState={buttonState} />
        </form>
    );
};
export default LoginForm;
