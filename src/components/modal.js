import PropTypes from "prop-types";
import React from 'react';

function Modal({ children }) {

    return (
        // Wrapper to file the entire view and be pinned to all corners. 
        // It acts as the fog of war behaind the modal.
        <div className="fixed pin z-50 overflow-auto bg-smoke-light flex">
            <div className="relative p-8 bg-white w-full max-w-md h-full md:h-auto m-auto flex-col flex">
                <span className="absolute pin-t pin-b pin-r p-4">
                    <svg className="h-12 w-12 fill-current text-grey hover:text-grey-darkest"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                </span>

                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Modal;