import React from 'react';
import './Explore.scss';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ExploreData from './ExploreData/ExploreData';
import ExploreRefresh from './ExploreRefresh/ExploreRefresh';
import FormErrors from '../FormErrors/FormErrors';

const Explore = ({userData ,handleRefresh, handleDeleteUser, error}) => {
    const { t } = useTranslation();
    return (
        <section className="explore center-container">
            <h1 className="heading">{t('Explore')}</h1>
            {/*Api Errors */}
            <FormErrors error={error} />
            {/*Refresh Button */}
            <ExploreRefresh handleRefresh={handleRefresh} />
            <ExploreData userData={userData} handleDeleteUser={handleDeleteUser} />
        </section>
    );
};

Explore.protoTypes = {
    userData: PropTypes.array,
    handleRefresh: PropTypes.func,
    handleDeleteUser: PropTypes.func
};

export default Explore;
