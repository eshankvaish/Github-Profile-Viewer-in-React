import React from 'react';
import PropTypes from 'prop-types';
import './Image.scss';

const Image = ({className, src, alt}) => {
    return <img className={className} src={src} alt={alt} />;
};

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string
};

export default Image;
