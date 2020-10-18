import Proptypes from 'prop-types';
import React from 'react';

function Container({ children, className }) {
    return (
        // md:px-8 md:py-16 Styles for desktop pre-grid
        <div className={`max-w-4xl px-4 py-8 mx-auto ${className ? className : ''}`}>
            {children}
        </div>
    );
}

Container.propTypes = {
    children: Proptypes.node.isRequired,
    className: Proptypes.string
};

export default Container;