import React from 'react';
import FormErrors from './FormErrors';

export default {
    title: 'Error Message',
    component: FormErrors,
};

export const ErrorMessage = () => <FormErrors error="Something went wrong!!!" />;
