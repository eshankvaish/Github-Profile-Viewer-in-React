import React from 'react';
import { useTranslation } from 'react-i18next';

const Loading = () => {
    const { t } = useTranslation();

    return (
        <h1 className="heading" data-test="loading">
            {t('Loading...')}
        </h1>
    );
};

export default Loading;
