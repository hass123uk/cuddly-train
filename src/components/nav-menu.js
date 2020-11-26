import { Link } from "gatsby";
import Proptypes from "prop-types";
import React, { useState } from "react";
import "../css/hamburgers.min.css";

function MobileFullScreenNavMenu({ links }) {
  return (
    <nav className="md:hidden fixed inset-0 z-40 bg-main flex justify-center">
      <ul className="flex-row items-center p-6 text-xl text-center">
        {links.map((link, index) => (
          <li className="my-3" key={index}>
            <Link
              className="text-white hover:text-accent active:text-accent no-underline"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function BurgerMenu({ links }) {
  console.log("links", links);
  const [isExpanded, setExpansion] = useState(false);
  return (
    <div className="my-2 mt-3">
      <button
        className={`md:hidden! relative z-50
                          hamburger hamburger--spring ${
                            isExpanded ? "is-active" : ""
                          }`}
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
        onClick={() => setExpansion(!isExpanded)}
      >
        <span className="hamburger-box ">
          <span className="hamburger-inner bg-white"></span>
        </span>
      </button>
      {isExpanded ? <MobileFullScreenNavMenu links={links} /> : null}

      <nav className="hidden md:flex md:items-center w-full md:w-auto">
        {links.map((link) => (
          <Link
            className="block mt-4 text-white hover:text-accent no-underline md:inline-block md:mt-0 md:ml-6"
            key={link.title}
            to={link.route}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}

const linksPropType = {
  links: Proptypes.array.isRequired,
};

MobileFullScreenNavMenu.propTypes = linksPropType;
BurgerMenu.propTypes = linksPropType;

export default BurgerMenu;
