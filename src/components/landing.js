import React from "react";
import Proptypes from "prop-types";
import { Link } from "gatsby";
import portraitPicture from "../images/portrait.jpg";

function Portrait({ className }) {
  return (
    <img
      src={portraitPicture}
      alt="A picture of a woman smiling"
      style={{ height: 500 }}
      className={`${className}`}
    />
  );
}
Portrait.propTypes = {
  className: Proptypes.string,
};

function Landing() {
  return (
    <section className="md:h-screen md:mb-64">
      <div className="md:flex md:flex-row md:justify-between bg-main">
        <Portrait className="md:hidden block w-100 mx-auto" />

        <div className="max-w-4xl py-4 md:max-w-full md:mb-64
        md:grid md:grid-cols-3 md:mx-auto">
          <div className="flex flex-col col-span-2 justify-center text-white text-center">
            <h1
              className="text-xl font-bold
             md:text-5xl md:self-center md:text-left md:ml-6"
            >
              Life Coach &amp; Certified NLP Practitioner
            </h1>
            <p className="text-md">Helping you to get through it.</p>
            <Link to="#contact">
              <button
                type="button"
                className="bg-accent rounded-full py-2 px-4 my-5"
                aria-label="Go to contact me page"
                aria-controls="navigation"
              >
                Work with me
              </button>
            </Link>
          </div>

          <Portrait className="hidden md:block lg:w-2/3 md:mx-auto row-end-1 col-end-4 z-20" />

          <div
            style={({ "max-width": "217px", height: 600 })}
            className="hidden md:flex bg-accent md:ml-auto md:mt-32 col-end-4 row-end-1"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
