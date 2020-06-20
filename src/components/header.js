import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import '../css/hamburgers.min.css';

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

function MobileFullScreenNavMenu() {

  return (
    <nav className="md:hidden fixed inset-0 z-40 bg-steel-blue flex justify-center">
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
            className={`md:hidden relative z-50
                        hamburger hamburger--spring ${isExpanded ? 'is-active' : ''}`}
            type="button"
            aria-label="Menu" aria-controls="navigation"
            onClick={() => setExpansion(!isExpanded)}
          >
            <span className="hamburger-box ">
              <span className="hamburger-inner bg-white"></span>
            </span>

          </button>
          {isExpanded ? <MobileFullScreenNavMenu /> : null}

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
