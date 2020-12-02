import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Search.scss';
import FormErrors from '../FormErrors/FormErrors';
import SearchForm from './SearchForm/SearchForm';
import Loading from '../UI/Loading/Loading';
import SearchSuggestionList from './SearchSuggestionList/SearchSuggestionList';
import Heading from '../UI/Heading/Heading';

const Search = ({
    handleSubmit, error, inputState, buttonState, loading, suggestions, handleChange,
    handleBlur,
}) => {
    const { t } = useTranslation();

    return (
        <section className="search center-container" data-test="search">
            <div className="search-container">
                <Heading heading={t('Search')} data-test="heading" />
                {loading && <Loading data-test="loading" />}
                {error && <FormErrors error={error} data-test="form-errors" />}
                <div className="search-form__container">
                    <SearchForm
                        handleSubmit={handleSubmit}
                        inputState={inputState}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        buttonState={buttonState}
                        data-test="search-form"
                    />
                    <SearchSuggestionList
                        suggestions={suggestions}
                        data-test="search-suggestion"
                    />
                </div>
            </div>
        </section>
    );
};

Search.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    error: PropTypes.string,
    inputState: PropTypes.instanceOf(Object).isRequired,
    buttonState: PropTypes.instanceOf(Object).isRequired,
    loading: PropTypes.bool,
    suggestions: PropTypes.instanceOf(Array).isRequired,
};

Search.defaultProps = {
    error: '',
    loading: false,
};

export default Search;
