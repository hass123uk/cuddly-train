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
        placeholder="Bill"
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
        placeholder="Murray"
        type="text"
      />

      <label className="block mb-2 text-xs font-bold uppercase" htmlFor="email">
        Email
      </label>

      <input
        className="w-full mb-6 form-input text-black"
        id="email"
        placeholder="email@example.com"
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
      <div className=" mx-auto ">
        <button className="rounded py-2 px-4 text-sm font-bold text-white bg-accent border-accent hover:bg-main">
          Submit
        </button>
      </div>
    </form>
  );
}
