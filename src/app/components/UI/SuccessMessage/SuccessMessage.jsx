import React from 'react';
import PropTypes from 'prop-types';

import './SuccessMessage.scss';

const SuccessMessage = ({ success }) => (
    success
        ? (
            <div className="success" data-test="success">
                {success}
            </div>
        ) : ''
);

SuccessMessage.propTypes = {
    success: PropTypes.string.isRequired,
};

export default SuccessMessage;
