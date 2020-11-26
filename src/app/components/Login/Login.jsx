import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Login.scss';
import FormErrors from '../FormErrors/FormErrors';
import Processing from '../UI/Processing/Processing';
import Heading from '../UI/Heading/Heading';
import LoginInputField from './LoginInputField/LoginInputField';
import Button from '../UI/Button/Button';

const Login = ({
    inputFieldState, buttonState, handleSubmit, error, loading, handleChange, handleBlur,
}) => {
    const { t } = useTranslation();

    return (
        <section className="login center-container" data-test="login">
            <div className="login-container">
                <Heading heading={t('Login')} data-test="heading" />
                {loading ? <Processing data-test="loading" /> : ''}
                <FormErrors error={error} data-test="form-errors" />
                <form className="login__form" onSubmit={handleSubmit} data-test="login-form">
                    <LoginInputField
                        inputFieldState={inputFieldState}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        data-test="login-input-field"
                    />
                    <Button {...buttonState} data-test="login-submit-button" />
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
    error: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    handleBlur: PropTypes.func.isRequired,
};

export default Login;
