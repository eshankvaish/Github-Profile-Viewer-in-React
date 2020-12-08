import React from 'react';
import './Explore.scss';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ExploreData from './ExploreData/ExploreData';
import ExploreRefresh from './ExploreRefresh/ExploreRefresh';
import FormErrors from '../FormErrors/FormErrors';
import Loading from '../UI/Loading/Loading';
import Heading from '../UI/Heading/Heading';
import SuccessMessage from '../UI/SuccessMessage/SuccessMessage';

const Explore = ({
    userData, handleRefresh, handleDeleteUser, error, handleFollow, loading, success,
}) => {
    const { t } = useTranslation();

    return (
        loading ? (
            <section className="explore center-container">
                <Loading data-test="loading" />
            </section>
        ) : (
            <section className="explore center-container" data-test="explore">
                <Heading heading={t('Explore')} data-test="heading" />
                {/* Api Errors */}
                {error && <FormErrors error={error} data-test="form-errors" />}
                {/* Success Messages */}
                {success && <SuccessMessage success={success} />}
                {/* Refresh Button */}
                <ExploreRefresh handleRefresh={handleRefresh} data-test="explore-refresh" />
                <ExploreData
                    userData={userData}
                    handleDeleteUser={handleDeleteUser}
                    handleFollow={handleFollow}
                    data-test="explore-data"
                />
            </section>
        )
    );
};

Explore.propTypes = {
    userData: PropTypes.instanceOf(Array).isRequired,
    handleRefresh: PropTypes.func.isRequired,
    handleDeleteUser: PropTypes.func.isRequired,
    handleFollow: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.string,
    success: PropTypes.string,
};

Explore.defaultProps = {
    loading: true,
    error: '',
    success: '',
};

export default Explore;
