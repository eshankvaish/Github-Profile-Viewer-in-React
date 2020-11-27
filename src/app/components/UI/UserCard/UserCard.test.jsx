import React from 'react';
import { shallow } from 'enzyme';

import UserCard from './UserCard';
import { findByTestAttr, checkProps } from '../../../utils/testUtils';

const setUp = (props = {}) => shallow(<UserCard {...props} />);

describe('UserCard Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                user: {},
                handleDeleteUser: () => {},
                handleFollow: () => {},
                followButton: false,
            };
            const propsErr = checkProps(UserCard, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let component;
        let mockFunction; // Mock Function for events

        beforeEach(() => {
            mockFunction = jest.fn();
            const props = {
                user: {
                    login: 'testuser',
                    avatar_url: 'avatar',
                },
                handleDeleteUser: mockFunction,
                handleFollow: mockFunction,
                followButton: true,
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'user-card');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a follow button', () => {
            const wrapper = findByTestAttr(component, 'follow-button');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a avatar', () => {
            const wrapper = findByTestAttr(component, 'avatar');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a remove button', () => {
            const wrapper = findByTestAttr(component, 'remove-button');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a username field', () => {
            const wrapper = findByTestAttr(component, 'username');
            expect(wrapper.length).toBe(1);
        });

        // click event on follow-button
        it('Should emit callback on click event on follow button', () => {
            const wrapper = findByTestAttr(component, 'follow-button');
            wrapper.simulate('click');
            const callbackLength = mockFunction.mock.calls.length;
            expect(callbackLength).toBe(1);
        });
    });
});
