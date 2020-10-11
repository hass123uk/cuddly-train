import React from "react";

export default function ContactForm() {
  return (
    <form>
      {/* className="mx-auto md:w-1/2" */}
      <h1 className="text-xl font-bold leading-loose text-center text-accent">
        Let&apos;s Connect
      </h1>
      <p className="mb-8 leading-loose text-center text-sm">
        <a href="mailto:someone@example.com">info@example.com</a>
      </p>
      {/* <a
            className="font-bold text-gray-700 no-underline"
            href="https://github.com/tailwindcss/custom-forms"
            target="email"
            rel="noopener noreferrer"
          >
            Read the docs
        </a> */}

      <label
        className="block mb-2 text-xs font-bold uppercase"
        htmlFor="first-name"
      >
        First Name
      </label>

      <input
        className="w-full mb-6 form-input text-black"
        id="first-name"
        type="text"
      />

      <label
        className="block mb-2 text-xs font-bold uppercase"
        htmlFor="last-name"
      >
        Last Name
      </label>

      <input
        className="w-full mb-6 form-input text-black"
        id="last-name"
        type="text"
      />

      <label className="block mb-2 text-xs font-bold uppercase" htmlFor="email">
        Email
      </label>

      <input
        className="w-full mb-6 form-input text-black"
        id="email"
        type="mail"
      />

      <label
        className="block mb-2 text-xs font-bold uppercase"
        htmlFor="message"
      >
        Message
      </label>

      <textarea
        className="w-full mb-6 form-textarea text-black"
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
  );
}
