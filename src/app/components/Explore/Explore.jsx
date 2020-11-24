import React from 'react';
import './Explore.scss';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ExploreData from './ExploreData/ExploreData';
import ExploreRefresh from './ExploreRefresh/ExploreRefresh';
import FormErrors from '../FormErrors/FormErrors';
import Loading from '../UI/Loading/Loading';
import Heading from '../UI/Heading/Heading';

const Explore = ({
    userData, handleRefresh, handleDeleteUser, error, handleFollow, loading,
}) => {
    const { t } = useTranslation();

    return (
        loading ? (
            <section className="explore center-container">
                <Loading />
            </section>
        ) : (
            <section className="explore center-container">
                <Heading heading={t('Explore')} />
                {/* Api Errors */}
                <FormErrors error={error} />
                {/* Refresh Button */}
                <ExploreRefresh handleRefresh={handleRefresh} />
                <ExploreData
                    userData={userData}
                    handleDeleteUser={handleDeleteUser}
                    handleFollow={handleFollow}
                />
            </section>
        )
    );
};

Explore.protoTypes = {
    userData: PropTypes.instanceOf(Array).isRequired,
    handleRefresh: PropTypes.func.isRequired,
    handleDeleteUser: PropTypes.func.isRequired,
    handleFollow: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default Explore;
