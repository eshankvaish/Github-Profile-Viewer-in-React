import React from 'react';
import PropTypes from 'prop-types';

import './Heading.scss';

const Heading = ({ heading }) => (
    <h1 className="heading">{ heading }</h1>
);

Heading.propTypes = {
    heading: PropTypes.string.isRequired,
};

export default Heading;
