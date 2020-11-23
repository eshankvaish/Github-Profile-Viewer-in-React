import React from 'react';
import './Explore.scss';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ExploreData from './ExploreData/ExploreData';
import ExploreRefresh from './ExploreRefresh/ExploreRefresh';
import FormErrors from '../FormErrors/FormErrors';
import Loading from '../Loading';

const Explore = ({userData ,handleRefresh, handleDeleteUser, error, handleFollow, loading}) => {
    const { t } = useTranslation();

    return (
        loading ? (
            <section className="explore center-container">
                <Loading />
            </section>
        ) : (
            <section className="explore center-container">
                <h1 className="heading">{t('Explore')}</h1>
                {/*Api Errors */}
                <FormErrors error={error} />
                {/*Refresh Button */}
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
    userData: PropTypes.array,
    handleRefresh: PropTypes.func,
    handleDeleteUser: PropTypes.func,
    handleFollow: PropTypes.func,
    loading: PropTypes.bool
};

export default Explore;
