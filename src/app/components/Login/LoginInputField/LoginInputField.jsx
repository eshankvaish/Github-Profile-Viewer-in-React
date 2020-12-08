import React from 'react';
import PropTypes from 'prop-types';

import InputElement from '../../UI/InputElement/InputElement';

const LoginInputField = ({ inputFieldState, handleChange, handleBlur }) => {
    const inputElements = Object.keys(inputFieldState).map((inputElement) => (
        <InputElement
            key={inputFieldState[inputElement].id}
            {...inputFieldState[inputElement]}
            handleChange={handleChange}
            handleBlur={handleBlur}
        />
    ));
    return inputElements;
};

LoginInputField.propTypes = {
    inputFieldState: PropTypes.instanceOf(Object).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
};

export default LoginInputField;
