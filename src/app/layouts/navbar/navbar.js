import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../../containers/navbarContainer';

const Navbar = () => {
    return (
        <NavbarContainer />
    );
};
export default withRouter(Navbar);
