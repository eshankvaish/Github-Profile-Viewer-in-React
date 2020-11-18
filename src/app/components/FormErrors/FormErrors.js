import React from 'react';
import PropTypes from 'prop-types';
import './FormErrors.scss';
import { useTranslation } from 'react-i18next';

const FormErrors = ({error}) => {
    const { t } = useTranslation();

    return (
        <div className="form__errors">
            {t(error)}
        </div>
    );
};
FormErrors.propTypes = {
    error: PropTypes.string
};
export default FormErrors;
