import Proptypes from 'prop-types';
import React from 'react';

function Container({ children, className }) {
    return (
        // lg:px-8 lg:py-16 Styles for desktop pre-grid
        <div className={`max-w-4xl px-4 py-8 mx-auto lg:max-w-full ${className ? className : ''}`}>
            {children}
        </div>
    );
}

Container.propTypes = {
    children: Proptypes.node.isRequired,
    className: Proptypes.string
};

export default Container;