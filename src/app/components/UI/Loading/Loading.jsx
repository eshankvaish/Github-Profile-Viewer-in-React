import React from 'react';
import { useTranslation } from 'react-i18next';

const Loading = () => {
    const { t } = useTranslation();

    return (
        <h1 className="heading">
            {t('Loading...')}
        </h1>
    );
};

export default Loading;
