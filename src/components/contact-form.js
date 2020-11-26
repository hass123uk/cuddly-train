// import { Link } from "gatsby";
import Proptypes from "prop-types";
import React from "react";
// import fbImg from "../images/fb.png";
// import inImg from "../images/in2.png";

function Input({ id, label }) {
  return (
    <>
      <label className="block mb-2 text-xs font-bold uppercase" htmlFor={id}>
        {label}
      </label>

      <input
        className="w-full mb-6 form-input bg-main text-white border-white border-0 border-b-2"
        id={id}
        type="text"
      />
    </>
  );
}

Input.propTypes = {
  id: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
};

export default function ContactForm() {
  return (
    <div className="md:flex">
      {/* className="mx-auto md:w-1/2" */}
      <div className="md:px-28 md:my-auto leading-loose text-center md:text-left">
        <h1 className="text-xl font-bold text-accent md:text-4xl md:mb-32">
          Let&apos;s Connect
        </h1>
        <p className="mb-8 text-sm md:text-xl">
          <a href="mailto:someone@example.com">info@example.com</a>
        </p>
        {/* <div className="flex justify-center md:justify-start mb-16">
          <Link>
            <img alt="Facebook icon" className="w-8 h-8 mr-2" src={fbImg}></img>
          </Link>
          <Link>
            <img alt="LinkedIn icon" className="w-8 h-8" src={inImg}></img>
          </Link>
        </div> */}
      </div>
      <form className="md:flex-auto">
        <div className="md:flex">
          <div className="md:flex-auto md:pr-12">
            <Input id="first-name" label="First Name" />
          </div>
          <div className="md:flex-auto">
            <Input id="last-name" label="Last Name" />
          </div>
        </div>
        <Input id="email" label="Email" />

        <label
          className="block mb-2 text-xs font-bold uppercase"
          htmlFor="message"
        >
          Message
        </label>

        <textarea
          className="w-full mb-6 form-textarea bg-main border-white border-0 border-b-2 placeholder-white"
          id="message"
          placeholder="Say something..."
          rows="8"
        />

        <div className="text-center">
          <button className="rounded-full py-2 px-8 text-lg font-bold text-white bg-accent border-accent">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
