import React from 'react';
import InputElement from './InputElement';

export default {
    title: 'Input Element',
    component: InputElement,
};

export const TextInput = () => <InputElement type="text" label="Name" placeholder="Enter Name" />;
export const SearchInput = () => <InputElement type="search" label="Search" placeholder="Enter Query" />;
export const PasswordInput = () => <InputElement type="password" label="Password" placeholder="Enter Password" />;
export const TextInputWithError = () => <InputElement type="text" label="Name" placeholder="Enter Name" fieldError="This field is required" className="border-red" />;
