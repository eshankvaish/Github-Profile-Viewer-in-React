import React from 'react';
import UserCard from './UserCard';

export default {
    title: 'User Card',
    component: UserCard,
};

const user = {
    login: 'Github',
    avatar_url: '/favicon.ico',
};

export const ProfileCard = () => <UserCard user={user} />;
export const ProfileCardWithFollow = () => <UserCard user={user} followButton />;
