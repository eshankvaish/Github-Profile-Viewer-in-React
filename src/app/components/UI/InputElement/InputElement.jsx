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
        <div className={containerClassName}>
            <label htmlFor={id}>{t(label)}</label>
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
            />
            {fieldError
                ? <div className="input-field__error">{fieldError}</div>
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
