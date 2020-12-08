import React from 'react';
import { shallow } from 'enzyme';

import FormErrors from './FormErrors';
import { findByTestAttr, checkProps } from '../../utils/testUtils';

const setUp = (props = {}) => shallow(<FormErrors {...props} />);

describe('Form Errors Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                error: '',
            };
            const propsErr = checkProps(FormErrors, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let component;
        beforeEach(() => {
            const props = {
                error: 'Something Went Wrong',
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'form-error');
            expect(wrapper.length).toBe(1);
        });
    });
});
