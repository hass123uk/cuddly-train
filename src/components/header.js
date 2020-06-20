import { graphql, useStaticQuery, Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
//import Modal from './modal';

import MenuIcon from "../images/menu.inline.svg";
import CloseIcon from "../images/close.inline.svg";

const navLinks = [
  {
    route: `/about`,
    title: `About`,
  },
  {
    route: `/contact`,
    title: `Contact`,
  },
];

function MobileFullScreenNavMenu({ onClose }) {

  const handleClose = (e) => {
    e.preventDefault();
    onClose()
  };

  return (
    <nav className="md:hidden fixed inset-0 z-50 bg-steel-blue flex justify-center">

      <buton className="absolute top-0 bottom-0 right-0 px-6 py-5 text-white"
        type="button"
        aria-label="Close menu" aria-controls="navigation">
        <CloseIcon title="close"
          className="w-5 h-5 font-thin fill-current"
          onClick={handleClose} />
      </buton>

      <ul className="flex-row items-center p-6 text-xl text-center">
        {navLinks.map((link, index) => (
          <li className="my-3" key={index}>
            <Link
              className="text-white no-underline"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          </li>))}
      </ul>
    </nav>
  );
}

MobileFullScreenNavMenu.propTypes = {
  onClose: PropTypes.func.isRequired
}

function Header() {
  const [isExpanded, setExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const handleMenuClose = () => {
    setExpansion(false);
  }

  return (
    <header className="bg-steel-blue">
      <div className="flex flex-wrap justify-between max-w-4xl mx-auto md:p-8">
        <div className="bg-geraldine flex-grow p-4">
          <Link to="/">
            <h1 className="flex items-center text-white no-underline">
              <span className="text-xl font-bold tracking-tight">
                {site.siteMetadata.title}
              </span>
            </h1>
          </Link>
        </div>
        <div className="m-4">
          <button
            className="px-2 py-1 text-white md:hidden"
            aria-label="Menu" aria-controls="navigation"
            onClick={() => setExpansion(true)}
          >
            <MenuIcon title="Menu" className="w-5 h-5 fill-current" />
          </button>
          {isExpanded ? <MobileFullScreenNavMenu onClose={handleMenuClose} /> : null}

          <nav className="hidden md:block md:flex md:items-center w-full md:w-auto">
            {navLinks.map((link) => (
              <Link
                className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
                key={link.title}
                to={link.route}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
