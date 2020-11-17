import {useState} from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Search = (props) => {
    const { t } = useTranslation();
    const [search, setSearchState] = useState({
        'search_value': ''
    });
    
    const handleChange = (e) => {
        setSearchState({
            ...search,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = document.querySelector('.login__errors');
        formErrors.classList.add('d-none');
        let config = {
            method: 'get',
            url: 'https://api.github.com/users/' + search.search_value
        };
        axios(config)
            .then(() => {
                props.history.push('/user/' + search.search_value);
            })
            .catch((error) => {
                formErrors.classList.remove('d-none');
            });
    }

    return (
        <section className="search center-container">
            <h1 className="heading">{t("Search")}</h1>
            <div className="login__errors d-none">
                {t("No User Found with given Username")}
            </div>
            <form className="search__field" onSubmit={handleSubmit}>
                <label htmlFor="search_value">{t("Search Using Username")}</label>
                <input type="search" aria-label="Search Field" name="search-value" id="search_value" placeholder={t("Enter Username")} onChange={handleChange} required />
                <button type="submit" aria-label="Search Button">{t("Search")}</button>
            </form>
        </section>
    );
}
export default Search;
