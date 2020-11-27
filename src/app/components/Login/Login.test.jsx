import React from 'react';
import { shallow } from 'enzyme';

import Login from './Login';
import { findByTestAttr, checkProps } from '../../utils/testUtils';

const setUp = (props = {}) => shallow(<Login {...props} />);

describe('Login Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                inputFieldState: {},
                buttonState: {},
                error: '',
                loading: false,
                handleBlur: () => {},
                handleChange: () => {},
                handleSubmit: () => {},
            };
            const propsErr = checkProps(Login, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let component;
        beforeEach(() => {
            const props = {
                inputFieldState: {
                    username: {
                        containerClassName: 'login__form--field',
                        id: 'username',
                        name: 'Username',
                        label: 'Username',
                        type: 'text',
                        className: 'login__form--input',
                        placeholder: 'Enter Username',
                        value: '',
                        fieldError: '',
                    },
                },
                buttonState: {
                    type: 'submit',
                    label: 'Login',
                    className: 'login__form--submit',
                    containerClassName: 'login__form--field login__form--submit-field',
                    id: 'login-button',
                },
                error: '',
                loading: true,
                handleBlur: () => {},
                handleChange: () => {},
                handleSubmit: () => {},
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'login');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a heading', () => {
            const wrapper = findByTestAttr(component, 'heading');
            expect(wrapper.length).toBe(1);
        });

        it('Should render Form Errors', () => {
            const wrapper = findByTestAttr(component, 'form-errors');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a login form', () => {
            const wrapper = findByTestAttr(component, 'login-form');
            expect(wrapper.length).toBe(1);
        });

        it('Should render login input field', () => {
            const wrapper = findByTestAttr(component, 'login-input-field');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a submit button', () => {
            const wrapper = findByTestAttr(component, 'login-submit-button');
            expect(wrapper.length).toBe(1);
        });

        it('Should render loading', () => {
            const wrapper = findByTestAttr(component, 'loading');
            expect(wrapper.length).toBe(1);
        });
    });
});
