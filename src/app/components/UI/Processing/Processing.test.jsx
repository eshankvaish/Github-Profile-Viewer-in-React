import React from 'react';
import { shallow } from 'enzyme';

import Processing from './Processing';
import { findByTestAttr } from '../../../utils/testUtils';

const setUp = () => shallow(<Processing />);

describe('Processing Component', () => {
    describe('Have props', () => {
        let component;

        beforeEach(() => {
            component = setUp();
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'processing');
            expect(wrapper.length).toBe(1);
        });
    });
});
