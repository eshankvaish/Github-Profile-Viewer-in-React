import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Search.scss';
import FormErrors from '../FormErrors/FormErrors';
import SearchForm from './SearchForm/SearchForm';
import Processing from '../UI/Processing/Processing';
import SearchSuggestionList from './SearchSuggestionList/SearchSuggestionList';
import Heading from '../UI/Heading/Heading';

const Search = ({
    handleSubmit, error, inputState, buttonState, loading, suggestions,
}) => {
    const { t } = useTranslation();

    return (
        <section className="search center-container">
            <div className="search-container">
                <Heading heading={t('Search')} />
                {loading ? <Processing /> : ''}
                <FormErrors error={error} />
                <div className="search-form__container">
                    <SearchForm
                        handleSubmit={handleSubmit}
                        inputState={inputState}
                        buttonState={buttonState}
                    />
                    <SearchSuggestionList suggestions={suggestions} />
                </div>
            </div>
        </section>
    );
};

Search.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    inputState: PropTypes.instanceOf(Object).isRequired,
    buttonState: PropTypes.instanceOf(Object).isRequired,
    loading: PropTypes.bool.isRequired,
    suggestions: PropTypes.instanceOf(Array).isRequired,
};

export default Search;
