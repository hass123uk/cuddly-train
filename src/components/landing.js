import React from "react";
import { Link } from "gatsby";
import portraitPicture from "../images/portrait.jpg";

function Landing() {
  return (
    <section className="md:h-screen">
      <div className="bg-main">
        <img
          src={portraitPicture}
          alt="A picture of a woman smiling"
          className="md:hidden mt-4 w-100 h-500"
        />

        <div className="max-w-4xl py-4 md:py-0 md:max-w-full md:mb-64 md:grid md:grid-cols-2 md:mx-auto">
          <div className="flex flex-col justify-center text-white text-center md:text-left md:pl-32">
            <h1 className="text-xl font-bold md:text-7xl">
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
          <div className="md:relative">
            <img
              src={portraitPicture}
              alt="A picture of a woman smiling"
              className="hidden md:block h-667 w-452 absolute right-20 top-64"
            />

            <div
              style={{ "max-width": "217px", height: 600, width: 217 }}
              className="hidden md:block bg-accent md:ml-auto md:mt-32"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
