import React from 'react';
import { shallow } from 'enzyme';

import Navbar from './Navbar';
import { findByTestAttr, checkProps } from '../../utils/testUtils';

const setUp = (props = {}) => shallow(<Navbar {...props} />);

describe('Navbar Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                navbarState: false,
                handleToggle: () => {},
                navList: [],
                handleClick: () => {},
            };
            const propsErr = checkProps(Navbar, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let component;
        beforeEach(() => {
            const props = {
                navbarState: false,
                handleToggle: () => {},
                navList: [],
                handleClick: () => {},
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'top-navbar');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a nav', () => {
            const wrapper = findByTestAttr(component, 'top-nav');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a logo', () => {
            const wrapper = findByTestAttr(component, 'nav-logo');
            expect(wrapper.length).toBe(1);
        });
        it('Should render a Nav List', () => {
            const wrapper = findByTestAttr(component, 'nav-list');
            expect(wrapper.length).toBe(1);
        });
    });
});
