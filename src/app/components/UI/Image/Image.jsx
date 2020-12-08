import React from 'react';
import PropTypes from 'prop-types';
import './Image.scss';

const Image = ({ design, src, alt }) => {
    let image;
    switch (design) {
    case 'circle':
        image = <img className="circle" src={src} alt={alt} data-test="image" />;
        break;
    default:
        image = <img src={src} alt={alt} data-test="image" />;
    }
    return image;
};

Image.propTypes = {
    design: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};
Image.defaultProps = {
    design: '',
};

export default Image;
