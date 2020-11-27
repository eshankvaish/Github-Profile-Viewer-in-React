import React from 'react';
import SuccessMessage from './SuccessMessage';

export default {
    title: 'Success Message',
    component: SuccessMessage,
};

export const SuccessMessageText = () => <SuccessMessage success="Login Successful" />;
