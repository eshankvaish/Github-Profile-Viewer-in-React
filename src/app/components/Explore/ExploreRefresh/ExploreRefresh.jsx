import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Button from '../../UI/Button/Button';

const ExploreRefresh = ({ handleRefresh }) => {
    const { t } = useTranslation();
    return (
        <Button
            type="submit"
            className="icon icon-refresh"
            handleClick={handleRefresh}
            label={t('Refresh')}
        />
    );
};

ExploreRefresh.propTypes = {
    handleRefresh: PropTypes.func.isRequired,
};

export default ExploreRefresh;
