import React from 'react';
import { shallow } from 'enzyme';

import Followers from './Followers';
import { findByTestAttr, checkProps } from '../../utils/testUtils';

const setUp = (props = {}) => shallow(<Followers {...props} />);

describe('Followers Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                followersState: {},
                username: '',
            };
            const propsErr = checkProps(Followers, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let component;
        beforeEach(() => {
            const props = {
                followersState: {
                    loading: false,
                    followersData: [],
                    error: 'Something went wrong',
                    title: 'Followers',
                },
                username: 'Test User',
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'followers');
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

        it('Should render Followers List', () => {
            const wrapper = findByTestAttr(component, 'follower-list');
            expect(wrapper.length).toBe(1);
        });

        it('Should not render loading', () => {
            const wrapper = findByTestAttr(component, 'loading');
            expect(wrapper.length).toBe(0);
        });
    });
});
