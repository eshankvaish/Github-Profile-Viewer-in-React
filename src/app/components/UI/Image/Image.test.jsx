import React from 'react';
import { shallow } from 'enzyme';

import Image from './Image';
import { findByTestAttr, checkProps } from '../../../utils/testUtils';

const setUp = (props = {}) => shallow(<Image {...props} />);

describe('Heading Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                className: '',
                src: '',
                alt: '',
            };
            const propsErr = checkProps(Image, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let component;

        beforeEach(() => {
            const props = {
                className: 'test-class',
                src: 'img-src',
                alt: 'img-alt',
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'image');
            expect(wrapper.length).toBe(1);
        });
    });
});
