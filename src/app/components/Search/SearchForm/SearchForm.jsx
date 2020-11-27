import React from 'react';
import PropTypes from 'prop-types';
import InputElement from '../../UI/InputElement/InputElement';
import Button from '../../UI/Button/Button';

const SearchForm = ({
    handleSubmit, inputState, buttonState, handleChange, handleBlur,
}) => (
    <form className="search-form" autoComplete="off" onSubmit={handleSubmit}>
        <InputElement {...inputState} handleChange={handleChange} handleBlur={handleBlur} />
        <Button {...buttonState} />
    </form>
);

SearchForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    inputState: PropTypes.instanceOf(Object).isRequired,
    buttonState: PropTypes.instanceOf(Object).isRequired,
};

export default SearchForm;
