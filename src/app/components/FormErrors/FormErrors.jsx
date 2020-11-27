import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './FormErrors.scss';

const FormErrors = ({ error }) => {
    const { t } = useTranslation();
    const errorField = error ? (
        <div className="form__errors">
            {t(error)}
        </div>
    ) : '';

    return errorField;
};

FormErrors.propTypes = {
    error: PropTypes.string.isRequired,
};
export default FormErrors;
