// import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

function Input({ id, label, type }) {
  return (
    <>
      <label className="block mb-2 text-xs font-bold uppercase" htmlFor={id}>
        {label}
      </label>

      <input
        className="w-full mb-6 form-input bg-main text-white border-white border-0 border-b-2"
        id={id}
        name={id}
        type={type}
        required
      />
    </>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default function ContactForm({ cmsData }) {
  return (
    <div className="lg:flex">
      {/* className="mx-auto lg:w-1/2" */}
      <div className="lg:px-28 lg:my-auto leading-loose text-center lg:text-left">
        <h1 className="text-xl font-bold text-accent lg:text-4xl lg:mb-32">
          {cmsData.title}
        </h1>

        {cmsData.email && cmsData.email.showEmail && (
          <p className="mb-8 text-sm lg:text-xl">
            <a href={`mailto:${cmsData.email.email}`}>{cmsData.email.email}</a>
          </p>
        )}

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
        action="/"
        netlify-honeypot="bot-field"
        data-netlify="true"
        className="lg:flex-auto"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you&apos;re human: <input name="bot-field" />
          </label>
        </p>

        {cmsData.showNameFields && (
          <div className="lg:flex">
            <div className="lg:flex-auto lg:pr-12">
              <Input id="first-name" label="First Name" type="text" />
            </div>
            <div className="lg:flex-auto">
              <Input id="last-name" label="Last Name" type="text" />
            </div>
          </div>
        )}

        <Input id="email" label="Email" type="email" />

        <label
          className="block mb-2 text-xs font-bold uppercase"
          htmlFor="message"
        >
          Message
        </label>

        <textarea
          className="w-full mb-6 form-textarea bg-main border-white border-0 border-b-2 placeholder-white"
          id="message"
          name="message"
          placeholder={cmsData.messagePlaceHolder}
          rows="8"
          required
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

ContactForm.propTypes = {
  cmsData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    email: PropTypes.shape({
      email: PropTypes.string.isRequired,
      showEmail: PropTypes.bool,
    }),
    messagePlaceHolder: PropTypes.string.isRequired,
    showNameFields: PropTypes.bool,
  }),
};
