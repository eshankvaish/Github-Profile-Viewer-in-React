import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Login.scss';
import FormErrors from '../FormErrors/FormErrors';
import LoginForm from './LoginForm/LoginForm';
import Processing from '../UI/Processing/Processing';
import Heading from '../UI/Heading/Heading';

const Login = ({inputFieldState, buttonState ,handleSubmit, error, loading}) => {
    const { t } = useTranslation();

    return (
        <section className="login center-container">
            <div className="login-container">
                <Heading heading={t('Login')} />
                {loading ? <Processing /> : ''}
                <FormErrors error={error} />
                <LoginForm inputFieldState={inputFieldState} buttonState={buttonState} handleSubmit={handleSubmit} />
            </div>
        </section>
    );
};

Login.propTypes = {
    inputFieldState: PropTypes.array,
    buttonState: PropTypes.array,
    handleSubmit: PropTypes.func,
    error: PropTypes.string,
    loading: PropTypes.bool
};

export default Login;
