import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';
import { useTranslation } from 'react-i18next';
import FormErrors from '../FormErrors/FormErrors';
import SearchForm from './SearchForm/SearchForm';

const Search = ({handleSubmit, error, inputState, buttonState}) => {
    const { t } = useTranslation();

    return (
        <section className="search center-container">
            <h1 className="heading">{t('Search')}</h1>
            <FormErrors error={error} />
            <SearchForm handleSubmit={handleSubmit} inputState={inputState} buttonState={buttonState} />
        </section>
    );
};

Search.protoTypes = {
    handleSubmit: PropTypes.func,
    error: PropTypes.string,
    inputState: PropTypes.object,
    buttonState: PropTypes.object
};

export default Search;
