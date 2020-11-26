import React from 'react';
import { shallow } from 'enzyme';

import Explore from './Explore';
import { findByTestAttr, checkProps } from '../../utils/testUtils';

const setUp = (props = {}) => shallow(<Explore {...props} />);

describe('Followers Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                userData: [],
                handleRefresh: () => {},
                handleDeleteUser: () => {},
                handleFollow: () => {},
                loading: false,
                error: '',
            };
            const propsErr = checkProps(Explore, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let component;
        beforeEach(() => {
            const props = {
                userData: [],
                handleRefresh: () => {},
                handleDeleteUser: () => {},
                handleFollow: () => {},
                loading: false,
                error: 'Something went wrong',
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'explore');
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

        it('Should render Refresh Button', () => {
            const wrapper = findByTestAttr(component, 'explore-refresh');
            expect(wrapper.length).toBe(1);
        });

        it('Should render Explore Data', () => {
            const wrapper = findByTestAttr(component, 'explore-refresh');
            expect(wrapper.length).toBe(1);
        });

        it('Should not render loading', () => {
            const wrapper = findByTestAttr(component, 'loading');
            expect(wrapper.length).toBe(0);
        });
    });
});
