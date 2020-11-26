import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
// import fbImg from "../images/fb.webp";

function Header({ className }) {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <header className={`${className} bg-accent flex flex-wrap justify-between`}>
      <div className="flex-grow p-4 md:flex-none md:px-8">
        <Link to="/">
          <h1 className="flex items-center text-white">
            <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
          <p className="text-sm text-white">{site.siteMetadata.description}</p>
        </Link>
      </div>
      <div className="bg-main flex md:flex-grow md:justify-between">
        <div className="flex">{/* TODO: Add navigation. */}</div>
        <div className="flex flex-col justify-center">
          {/* <Link>
            <img
              alt="Facebook icon"
              className="w-8 h-8 block mx-3 my-1 rounded-full"
              src={fbImg}
            ></img>
          </Link> */}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Header;
