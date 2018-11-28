import React from 'react';
import PropTypes from 'prop-types';

function Button({onClick}) {
    return (<button
        onClick={onClick}>
        My test
    </button>);
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Button;
