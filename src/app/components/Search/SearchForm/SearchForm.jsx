import React from 'react';
import PropTypes from 'prop-types';
import InputElement from '../../UI/InputElement/InputElement';
import Button from '../../UI/Button/Button';

const SearchForm = ({
    handleSubmit, inputState, buttonState, handleChange, handleBlur, username,
}) => (
    <form autoComplete="off" onSubmit={handleSubmit} noValidate>
        <InputElement {...inputState} handleChange={handleChange} handleBlur={handleBlur} />
        <Button {...buttonState} disabled={!username} />
    </form>
);

SearchForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    inputState: PropTypes.instanceOf(Object).isRequired,
    buttonState: PropTypes.instanceOf(Object).isRequired,
    username: PropTypes.string.isRequired,
};

export default SearchForm;
