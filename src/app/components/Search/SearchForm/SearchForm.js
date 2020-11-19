import React from 'react';
import PropTypes from 'prop-types';
import InputElement from '../../InputElement';
import Button from '../../Button';

const SearchForm = ({handleSubmit, inputState, buttonState}) => {
    return (
        <form onSubmit={handleSubmit}>
            <InputElement {...inputState} />
            <Button {...buttonState} />
        </form>
    );
};

SearchForm.protoTypes = {
    handleSubmit: PropTypes.func,
    inputState: PropTypes.object,
    buttonState: PropTypes.object
};

export default SearchForm;
