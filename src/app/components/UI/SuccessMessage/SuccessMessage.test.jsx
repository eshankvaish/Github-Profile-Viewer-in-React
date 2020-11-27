import React from 'react';
import { shallow } from 'enzyme';

import SuccessMessage from './SuccessMessage';
import { findByTestAttr, checkProps } from '../../../utils/testUtils';

const setUp = (props = {}) => shallow(<SuccessMessage {...props} />);

describe('SuccessMessage Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                success: '',
            };
            const propsErr = checkProps(SuccessMessage, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let component;

        beforeEach(() => {
            const props = {
                success: 'Test Success Message',
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'success');
            expect(wrapper.length).toBe(1);
        });
    });
});
