import React from 'react';
import Chip from './Chip';

export default {
    title: 'Chip',
    component: Chip,
};

const chips = [
    {
        login: 'storybook',
        avatar_url: '/favicon.ico',
    },
    {
        login: 'testuser',
        avatar_url: '/favicon.ico',
    },
];

export const NormalChip = () => <Chip chips={chips} />;
