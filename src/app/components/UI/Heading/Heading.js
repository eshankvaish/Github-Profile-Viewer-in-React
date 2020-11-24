import React from 'react';
import PropTypes from 'prop-types'; 
import './Heading.scss';

const Heading = ({heading}) => {
    return (
        <h1 className="heading">{ heading }</h1>
    );
};

Heading.propTypes = {
    heading: PropTypes.string
};

export default Heading;
