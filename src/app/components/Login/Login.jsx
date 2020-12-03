import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Login.scss';
import FormErrors from '../FormErrors/FormErrors';
import Loading from '../UI/Loading/Loading';
import Heading from '../UI/Heading/Heading';
import LoginInputField from './LoginInputField/LoginInputField';
import Button from '../UI/Button/Button';

const Login = ({
    inputFieldState, buttonState, handleSubmit, error, loading, handleChange, handleBlur,
    username, authToken,
}) => {
    const { t } = useTranslation();

    return (
        <section className="login center-container" data-test="login">
            <div className="login__container">
                <Heading heading={t('Login')} data-test="heading" />
                {loading && <Loading data-test="loading" />}
                {error && <FormErrors error={error} data-test="form-errors" />}
                <form onSubmit={handleSubmit} data-test="login-form" noValidate>
                    <LoginInputField
                        inputFieldState={inputFieldState}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        data-test="login-input-field"
                    />
                    <Button {...buttonState} data-test="login-submit-button" disabled={!username || !authToken} />
                </form>
            </div>
        </section>
    );
};

Login.propTypes = {
    inputFieldState: PropTypes.instanceOf(Object).isRequired,
    buttonState: PropTypes.instanceOf(Object).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool,
    handleBlur: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    authToken: PropTypes.string.isRequired,
};

Login.defaultProps = {
    error: '',
    loading: false,
};

export default Login;
