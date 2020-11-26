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
    <div className="lg:flex">
      {/* className="mx-auto lg:w-1/2" */}
      <div className="lg:px-28 lg:my-auto leading-loose text-center lg:text-left">
        <h1 className="text-xl font-bold text-accent lg:text-4xl lg:mb-32">
          Let&apos;s Connect
        </h1>
        <p className="mb-8 text-sm lg:text-xl">
          <a href="mailto:info@dianemahmud.com">info@dianemahmud.com</a>
        </p>
        {/* <div className="flex justify-center lg:justify-start mb-16">
          <Link>
            <img alt="Facebook icon" className="w-8 h-8 mr-2" src={fbImg}></img>
          </Link>
          <Link>
            <img alt="LinkedIn icon" className="w-8 h-8" src={inImg}></img>
          </Link>
        </div> */}
      </div>
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        className="lg:flex-auto"
      >

        <p className="hidden">
          <label>
            Don’t fill this out if you&apos;re human: <input name="bot-field" />
          </label>
        </p>

        <div className="lg:flex">
          <div className="lg:flex-auto lg:pr-12">
            <Input id="first-name" label="First Name" />
          </div>
          <div className="lg:flex-auto">
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
