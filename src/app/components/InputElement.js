import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const InputElement = ({type, id, name, className, placeholder, onChange, containerClassName, label}) => {
    const {t} = useTranslation();
    return (
        <div className={containerClassName}>
            <label htmlFor={id}>{t(label)}</label>
            <input type={type} aria-label={name} className={className} name={name} id={id} placeholder={t(placeholder)} onChange={onChange} required />
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
    onChange: PropTypes.func
};
export default InputElement;
