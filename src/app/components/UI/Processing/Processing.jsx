import React from 'react';
import { useTranslation } from 'react-i18next';

import './Processing.scss';

const Processing = () => {
    const { t } = useTranslation();

    return (
        <div className="processing">
            {t('Processing...')}
        </div>
    );
};

export default Processing;
