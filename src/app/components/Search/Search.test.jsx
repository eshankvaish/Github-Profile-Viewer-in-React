import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';
import { findByTestAttr, checkProps } from '../../utils/testUtils';

const setUp = (props = {}) => shallow(<Search {...props} />);

describe('Search Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                handleSubmit: () => {},
                handleChange: () => {},
                handleBlur: () => {},
                error: '',
                inputState: {},
                buttonState: {},
                loading: false,
                suggestions: [],
                username: '',
            };
            const propsErr = checkProps(Search, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let component;
        beforeEach(() => {
            const props = {
                handleSubmit: () => {},
                handleChange: () => {},
                handleBlur: () => {},
                error: 'Something went wrong',
                inputState: {
                    type: 'search',
                    label: 'Search Username',
                    name: 'username',
                    id: 'username',
                    placeholder: 'Enter Username',
                },
                buttonState: {
                    type: 'submit',
                    label: 'Search',
                },
                loading: true,
                suggestions: [],
                username: '',
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'search');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a heading', () => {
            const wrapper = findByTestAttr(component, 'heading');
            expect(wrapper.length).toBe(1);
        });

        it('Should render loading', () => {
            const wrapper = findByTestAttr(component, 'loading');
            expect(wrapper.length).toBe(1);
        });

        it('Should render form-erros', () => {
            const wrapper = findByTestAttr(component, 'form-errors');
            expect(wrapper.length).toBe(1);
        });

        it('Should render form', () => {
            const wrapper = findByTestAttr(component, 'search-form');
            expect(wrapper.length).toBe(1);
        });

        it('Should render suggestion list', () => {
            const wrapper = findByTestAttr(component, 'search-suggestion');
            expect(wrapper.length).toBe(1);
        });
    });
});
