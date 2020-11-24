import React from 'react';
import PropTypes from 'prop-types';
import InputElement from '../../UI/InputElement/InputElement';
import Button from '../../UI/Button/Button';

const SearchForm = ({ handleSubmit, inputState, buttonState }) => (
    <form className="search-form" autoComplete="off" onSubmit={handleSubmit}>
        <InputElement {...inputState} />
        <Button {...buttonState} />
    </form>
);

SearchForm.protoTypes = {
    handleSubmit: PropTypes.func,
    inputState: PropTypes.object,
    buttonState: PropTypes.object,
};

export default SearchForm;
