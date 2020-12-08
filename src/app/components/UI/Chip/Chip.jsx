/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Chip.scss';
import Image from '../Image/Image';

const Chip = ({ chips }) => {
    const { t } = useTranslation();
    const chip = chips.map(({ login, avatar_url }) => (
        <li key={login} className="chip" data-test="chip">
            <Link to={`/${login}`} className="chip__item" data-test="chip-link">
                <span className="chip__avatar" data-test="chip-avatar">
                    <Image src={avatar_url} alt={t('User Avatar')} design="circle" />
                </span>
                <span className="chip__username" data-test="chip-username">
                    {login}
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
