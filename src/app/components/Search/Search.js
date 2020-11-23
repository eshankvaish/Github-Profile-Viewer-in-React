import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';
import { useTranslation } from 'react-i18next';
import FormErrors from '../FormErrors/FormErrors';
import SearchForm from './SearchForm/SearchForm';
import Processing from '../Processing';

const Search = ({handleSubmit, error, inputState, buttonState, loading}) => {
    const { t } = useTranslation();

    return (
        <section className="search center-container">
            <div className="search-container">
                <h1 className="heading">{t('Search')}</h1>
                {loading ? <Processing /> : ''}
                <FormErrors error={error} />
                <SearchForm
                    handleSubmit={handleSubmit}
                    inputState={inputState}
                    buttonState={buttonState}
                />
            </div>
        </section>
    );
};

Search.protoTypes = {
    handleSubmit: PropTypes.func,
    error: PropTypes.string,
    inputState: PropTypes.object,
    buttonState: PropTypes.object,
    loading: PropTypes.bool
};

export default Search;
