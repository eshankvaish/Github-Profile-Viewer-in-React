import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './Button.scss';

const Button = ({
    type, label, className, containerClassName, ariaLabel, handleClick,
}) => {
    const { t } = useTranslation();
    return (
        <div className={containerClassName}>
            <button
                // eslint-disable-next-line react/button-has-type
                type={type}
                aria-label={label || ariaLabel}
                className={className}
                onClick={handleClick}
            >
                {t(label)}
            </button>
        </div>
    );
};
Button.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    ariaLabel: PropTypes.string,
    handleClick: PropTypes.func,
};

Button.defaultProps = {
    type: 'submit',
    label: '',
    className: '',
    containerClassName: '',
    ariaLabel: '',
    handleClick: () => {},
};

export default Button;
