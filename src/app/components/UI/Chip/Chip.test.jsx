import React from 'react';
import { shallow } from 'enzyme';

import Chip from './Chip';
import { findByTestAttr, checkProps } from '../../../utils/testUtils';

const setUp = (props = {}) => shallow(<Chip {...props} />);

describe('Heading Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = [
                {
                    login: '',
                    avatar_url: '',
                },
            ];
            const propsErr = checkProps(Chip, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let component;

        beforeEach(() => {
            const props = {
                chips: [
                    {
                        login: 'testuser',
                        avatar_url: '/favicon.ico',
                    },
                ],
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'chip');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a link', () => {
            const wrapper = findByTestAttr(component, 'chip-link');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a avatar', () => {
            const wrapper = findByTestAttr(component, 'chip-avatar');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a username', () => {
            const wrapper = findByTestAttr(component, 'chip-username');
            expect(wrapper.length).toBe(1);
        });
    });
});
