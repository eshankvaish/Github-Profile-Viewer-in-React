import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './InputElement.scss';

const InputElement = ({
    type, id, name, className, placeholder, containerClassName, label,
    fieldError, handleChange, handleBlur,
}) => {
    const { t } = useTranslation();
    return (
        <div className={containerClassName} data-test="input-element">
            <label htmlFor={id} data-test="input-label">{t(label)}</label>
            <input
                type={type}
                aria-label={name}
                className={className}
                name={name}
                id={id}
                placeholder={t(placeholder)}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                data-test="input-field"
            />
            {fieldError
                ? <div className="error-field" data-test="field-error">{fieldError}</div>
                : '' }
        </div>
    );
};

InputElement.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    handleChange: PropTypes.func,
    containerClassName: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    handleBlur: PropTypes.func,
    fieldError: PropTypes.string,
};

InputElement.defaultProps = {
    type: 'text',
    className: '',
    handleChange: () => {},
    containerClassName: '',
    placeholder: '',
    handleBlur: () => {},
    fieldError: '',
};

export default InputElement;
