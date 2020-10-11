import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import BurgerMenu from "./nav-menu";
import fbImg from "../images/fb.webp";

const navLinks = [
  {
    route: `/my-story`,
    title: `My Story`,
  },
  {
    route: `/contact`,
    title: `Contact`,
  },
];

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
    <header className="bg-main">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-between md:p-8">
          <div className="bg-accent flex-grow p-4">
            <Link to="/">
              <h1 className="flex items-center text-white">
                <span className="text-xl font-bold tracking-tight">
                  {site.siteMetadata.title}
                </span>
              </h1>
              <p className="text-sm text-white">
                {site.siteMetadata.description}
              </p>
            </Link>
          </div>
          <BurgerMenu links={navLinks}/>
        </div>
        <div className="p-2 md:hidden">
          <img
            alt="Facebook icon"
            className="w-5 h-5 block mx-2"
            src={fbImg}
          ></img>
        </div>
      </div>
    </header>
  );
}

export default Header;
