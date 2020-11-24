import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './InputElement.scss';

const InputElement = ({
    type, id, name, className, placeholder, containerClassName, label, handleChange, handleBlur,
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
};

export default InputElement;
