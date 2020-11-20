import React from 'react';
import PropTypes from 'prop-types';
import './ExploreRefresh.scss';
import { useTranslation } from 'react-i18next';

const ExploreRefresh = ({handleRefresh}) => {
    const { t } = useTranslation();
    return (
        <div className="explore__refresh">
            <a title="Refresh Suggestions" aria-label="Refresh Suggestions" onClick={handleRefresh}>{t('Refresh')} <i className="icon icon-refresh explore__refresh--icon"></i></a>
        </div>
    );
};

ExploreRefresh.protoTypes = {
    handleRefresh: PropTypes.func
};

export default ExploreRefresh;
