import React from 'react';
import { shallow } from 'enzyme';

import InputElement from './InputElement';
import { findByTestAttr, checkProps } from '../../../utils/testUtils';

const setUp = (props = {}) => shallow(<InputElement {...props} />);

describe('Heading Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                type: '',
                id: '',
                name: '',
                handleChange: () => {},
                label: '',
                placeholder: '',
                handleBlur: () => {},
                fieldError: '',
            };
            const propsErr = checkProps(InputElement, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let component;
        let mockFunction;

        beforeEach(() => {
            mockFunction = jest.fn();
            const props = {
                type: 'text',
                id: 'test-id',
                name: 'test-input',
                handleChange: mockFunction,
                label: 'test-label',
                placeholder: 'Enter text',
                handleBlur: mockFunction,
                fieldError: 'Field Error',
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'input-element');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a label', () => {
            const wrapper = findByTestAttr(component, 'input-label');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a input field', () => {
            const wrapper = findByTestAttr(component, 'input-field');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a field errors', () => {
            const wrapper = findByTestAttr(component, 'field-error');
            expect(wrapper.length).toBe(1);
        });

        // change event
        it('Should emit callback on change event', () => {
            const wrapper = findByTestAttr(component, 'input-field');
            wrapper.simulate('change');
            const callbackLength = mockFunction.mock.calls.length;
            expect(callbackLength).toBe(1);
        });

        // blur event
        it('Should emit callback on blur event', () => {
            const wrapper = findByTestAttr(component, 'input-field');
            wrapper.simulate('blur');
            const callbackLength = mockFunction.mock.calls.length;
            expect(callbackLength).toBe(1);
        });
    });
});
