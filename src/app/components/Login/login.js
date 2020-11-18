import React from 'react';
import { useTranslation } from 'react-i18next';

const Login = ({handleChange, handleSubmit, loginState}) => {
    const { t } = useTranslation();

    return (
        <section className="login center-container">
            <h1 className="heading">{t('Login')}</h1>
            <div className="login__errors">
                {t(loginState.error)}
            </div>
            <form className="login__form" onSubmit={handleSubmit}>
                <div className="login__form--field">
                    <label htmlFor="login__form--username">{t('Username')}</label>
                    <input type="text" aria-label="Username" className="login__form--input" name="username" id="username" placeholder={t('Enter Username')} onChange={handleChange} required />
                </div>
                <div className="login__form--field">
                    <label htmlFor="auth_token">{t('Personal Access Token')}</label>
                    <input type="password" aria-label="Access Token" className="login__form--input" name="auth_token" placeholder={t('Enter Access Token')} id="auth_token" onChange={handleChange} required />
                </div>
                <div className="login__form--field">    
                    <button type="submit" aria-label="Login Button" className="login__form--submit">{t('Login')}</button>
                </div>
            </form>
        </section>
    );
};
export default Login;
