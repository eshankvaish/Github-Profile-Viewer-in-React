import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';
import { findByTestAttr, checkProps } from '../../../utils/testUtils';

const setUp = (props = {}) => shallow(<Button {...props} />);

describe('Button Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                handleClick: () => {},
                type: '',
                label: '',
                className: '',
                containerClassName: '',
                ariaLabel: '',
            };
            const propsErr = checkProps(Button, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let component;
        let mockFunction; // Mock Function for events

        beforeEach(() => {
            mockFunction = jest.fn();
            const props = {
                handleClick: mockFunction,
                type: 'submit',
                label: 'Submit',
                className: 'btn',
                containerClassName: 'btn-container',
                ariaLabel: 'Submit Button',
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'button-container');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a heading', () => {
            const wrapper = findByTestAttr(component, 'button');
            expect(wrapper.length).toBe(1);
        });

        // click event
        it('Should emit callback on click event', () => {
            const wrapper = findByTestAttr(component, 'button');
            wrapper.simulate('click');
            const callbackLength = mockFunction.mock.calls.length;
            expect(callbackLength).toBe(1);
        });
    });
});
