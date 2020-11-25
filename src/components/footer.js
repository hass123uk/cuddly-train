import React from "react";
import PropTypes from "prop-types";

function Footer({ className }) {
  return (
    <footer className={`${className} bg-accent`}>
      <nav className="flex justify-center max-w-4xl p-4 mx-auto text-sm md:p-8">
        <p className="text-main">&copy; 2020 by Diane Mahmud</p>
      </nav>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Footer;
