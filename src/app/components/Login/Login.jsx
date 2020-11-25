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
    inputFieldState, buttonState, handleSubmit, error, loading,
}) => {
    const { t } = useTranslation();

    return (
        <section className="login center-container">
            <div className="login-container">
                <Heading heading={t('Login')} />
                {loading ? <Processing /> : ''}
                <FormErrors error={error} />
                <form className="login__form" onSubmit={handleSubmit}>
                    <LoginInputField inputFieldState={inputFieldState} />
                    <Button {...buttonState} />
                </form>
            </div>
        </section>
    );
};

Login.propTypes = {
    inputFieldState: PropTypes.instanceOf(Array).isRequired,
    buttonState: PropTypes.instanceOf(Array).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default Login;
