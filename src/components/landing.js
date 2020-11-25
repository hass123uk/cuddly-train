import React from "react";
import { Link } from "gatsby";
import portraitPicture from "../images/portrait.jpg";

function Landing() {
  return (
    <section className="md:h-screen md:mb-64 md:relative">
      <div className="bg-main">
        
        <img
          src={portraitPicture}
          alt="A picture of a woman smiling"
          className="w-100 h-500 md:h-667 md:w-452 md:absolute md:right-32 md:bottom-12"
        />

        <div className="max-w-4xl py-4 md:py-0 md:max-w-full md:mb-64 md:grid md:grid-cols-3 md:mx-auto">
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

          <div
            style={{ "max-width": "217px", height: 600, width: 217 }}
            className="hidden md:block bg-accent md:ml-auto md:mt-32 col-end-4 row-end-1"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
