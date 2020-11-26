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
                ? <div className="input-field__error" data-test="field-error">{fieldError}</div>
                : '' }
        </div>
    );
};

InputElement.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    handleChange: PropTypes.func,
    containerClassName: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    handleBlur: PropTypes.func,
    fieldError: PropTypes.string,
};

InputElement.defaultProps = {
    type: 'text',
    id: '',
    name: '',
    className: '',
    handleChange: () => {},
    containerClassName: '',
    label: '',
    placeholder: '',
    handleBlur: () => {},
    fieldError: '',
};

export default InputElement;
