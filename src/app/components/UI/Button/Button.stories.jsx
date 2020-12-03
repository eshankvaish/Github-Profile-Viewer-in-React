import React from 'react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button,
};

export const SubmitButton = () => <Button label="Submit" />;
export const DisabledSubmitButton = () => <Button label="Submit" disabled />;
