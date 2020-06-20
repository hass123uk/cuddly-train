import Proptypes from 'prop-types';
import React from 'react';

function Container({ children }) {
    return (
        <div className="max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
            {children}
        </div>
    );
}

Container.propTypes = {
    children: Proptypes.node.isRequired
};

export default Container;