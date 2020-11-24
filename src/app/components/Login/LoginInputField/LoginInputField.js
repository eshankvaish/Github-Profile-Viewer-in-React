import React from 'react';
import InputElement from '../../UI/InputElement/InputElement';

const LoginInputField = ({inputFieldState}) => {
    const inputElements = inputFieldState.map(inputElement =>
        <InputElement key={inputElement.id} {...inputElement} />
    );
    return inputElements;
};
export default LoginInputField;
