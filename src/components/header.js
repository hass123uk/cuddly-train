import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import fbImg from "../images/fb.webp";

function Header() {
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
    <header className="bg-accent flex flex-wrap justify-between md:p-8">
      <div className="flex-grow p-4">
        <Link to="/">
          <h1 className="flex items-center text-white">
            <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
          <p className="text-sm text-white">{site.siteMetadata.description}</p>
        </Link>
      </div>
      <div className="flex flex-col justify-center">
        <Link>
          <img
            alt="Facebook icon"
            className="bg-main w-8 h-8 block mx-3 my-1 rounded-full"
            src={fbImg}
          ></img>
        </Link>
      </div>
    </header>
  );
}

export default Header;
