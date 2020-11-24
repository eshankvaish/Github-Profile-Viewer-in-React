import React from 'react';
import './LoginForm.scss';
import LoginInputField from '../LoginInputField/LoginInputField';
import Button from '../../UI/Button/Button';

const LoginForm = ({ inputFieldState, buttonState, handleSubmit }) => (
    <form className="login__form" onSubmit={handleSubmit}>
        <LoginInputField inputFieldState={inputFieldState} />
        <Button {...buttonState} />
    </form>
);
export default LoginForm;
