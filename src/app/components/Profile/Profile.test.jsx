import React from 'react';
import { shallow } from 'enzyme';

import Profile from './Profile';
import { findByTestAttr, checkProps } from '../../utils/testUtils';

const setUp = (props = {}) => shallow(<Profile {...props} />);

describe('Profile Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                loginState: {},
            };
            const propsErr = checkProps(Profile, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let component;
        beforeEach(() => {
            const props = {
                loginState: {
                    username: 'Test User',
                    authToken: 'my token',
                },
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'profile');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a heading', () => {
            const wrapper = findByTestAttr(component, 'heading');
            expect(wrapper.length).toBe(1);
        });

        it('Should render User Profile', () => {
            const wrapper = findByTestAttr(component, 'user-profile');
            expect(wrapper.length).toBe(1);
        });
    });
});
