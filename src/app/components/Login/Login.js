import React from 'react';
import { useTranslation } from 'react-i18next';
import './Login.scss';
import FormErrors from '../FormErrors/FormErrors';
import LoginForm from './LoginForm/LoginForm';

const Login = ({inputFieldState, buttonState ,handleSubmit, error}) => {
    const { t } = useTranslation();

    return (
        <section className="login center-container">
            <h1 className="heading">{t('Login')}</h1>
            {<FormErrors error={error} />}
            <LoginForm inputFieldState={inputFieldState} buttonState={buttonState} handleSubmit={handleSubmit} />
        </section>
    );
};
export default Login;
