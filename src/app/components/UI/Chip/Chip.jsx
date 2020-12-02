import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Chip.scss';
import Image from '../Image/Image';

const Chip = ({ chips }) => {
    const { t } = useTranslation();
    const chip = chips.map((chipItem) => (
        <li key={chipItem.login} className="chip" data-test="chip">
            <Link to={`/${chipItem.login}`} className="chip__item" data-test="chip-link">
                <span className="chip__item--avatar" data-test="chip-avatar">
                    <Image src={chipItem.avatar_url} alt={t('User Avatar')} className="circle" />
                </span>
                <span className="chip__item--username" data-test="chip-username">
                    {chipItem.login}
                </span>
            </Link>
        </li>
    ));

    return chip;
};

Chip.propTypes = {
    chips: PropTypes.instanceOf(Array),
};

export default Chip;
