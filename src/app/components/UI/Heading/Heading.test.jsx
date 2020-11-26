import React from 'react';
import { shallow } from 'enzyme';

import Heading from './Heading';
import { findByTestAttr, checkProps } from '../../../utils/testUtils';

const setUp = (props = {}) => shallow(<Heading {...props} />);

describe('Heading Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                heading: '',
            };
            const propsErr = checkProps(Heading, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let component;

        beforeEach(() => {
            const props = {
                heading: 'Test heading',
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'heading');
            expect(wrapper.length).toBe(1);
        });
    });
});
