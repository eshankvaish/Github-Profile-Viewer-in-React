import React from 'react';
import { shallow } from 'enzyme';

import Loading from './Loading';
import { findByTestAttr } from '../../../utils/testUtils';

const setUp = () => shallow(<Loading />);

describe('Loading Component', () => {
    describe('Have props', () => {
        let component;

        beforeEach(() => {
            component = setUp();
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'loading');
            expect(wrapper.length).toBe(1);
        });
    });
});
