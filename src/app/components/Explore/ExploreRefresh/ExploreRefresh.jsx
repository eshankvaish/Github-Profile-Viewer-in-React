import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const ExploreRefresh = ({ handleRefresh }) => {
    const { t } = useTranslation();
    return (
        <button type="submit" onClick={handleRefresh}>
            {t('Refresh')}
            <i className="icon icon-refresh explore__refresh--icon" />
        </button>
    );
};

ExploreRefresh.protoTypes = {
    handleRefresh: PropTypes.func.isRequired,
};

export default ExploreRefresh;
