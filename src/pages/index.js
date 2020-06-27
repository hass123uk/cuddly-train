import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import portraitPicture from "../images/portrait.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`life coach`, `counseling`, `nlp coach`]}
        title="Home"
      />

      <section>
        <img
          alt="A picture of a woman standing outside smiling"
          className="block w-100"
          src={portraitPicture}
        />
        <Container className="bg-main text-white text-center">
          <h1 className="text-xl font-bold">
            Life Coach &amp; Certified NLP Practitioner
          </h1>
          <p className="text-md ">Helping you to get through it.</p>
          <button
            type="button"
            className="bg-accent rounded-full py-2 px-4 my-5"
            aria-label="Go to contact me page" aria-controls="navigation"
          >
            Work with me
          </button>
        </Container>
      </section>

      {/* <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Hey there! Welcome to your first Gatsby site.
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold text-gray-900 no-underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          , a utility-first CSS framework.
        </p>
      </section> */}
    </Layout>
  );
}

export default IndexPage;
