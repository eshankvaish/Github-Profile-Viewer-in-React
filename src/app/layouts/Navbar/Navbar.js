import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../../containers/NavbarContainer/NavbarContainer';

const Navbar = ({isLoggedIn}) => {
    return (
        <NavbarContainer isLoggedIn={isLoggedIn} />
    );
};
export default withRouter(Navbar);
