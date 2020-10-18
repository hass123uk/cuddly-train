import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import portraitPicture from "../images/portrait.jpg";
import ContactForm from "../components/contact-form";

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`life coach`, `counseling`, `nlp coach`]} title="Home" />

      <section className="md:h-screen 
          md:flex md:flex-row md:justify-between bg-main md:mb-64">
        <img
          alt="A picture of a woman smiling"
          className="block w-100 md:hidden"
          style={{ height: 500 }}
          src={portraitPicture}
        />
        <div
          className=" text-white text-center 
          max-w-4xl md:max-w-full md:mb-64"
        >
          <div className="py-4 md:grid md:grid-cols-2 md:mx-auto">
            <div>
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
            <img
              alt="A picture of a woman smiling"
              className="hidden md:block 
              md:w-2/3 md:m-auto"
              style={{ height: 500 }}
              src={portraitPicture}
            />
          </div>
        </div>
        <div className="hidden md:flex bg-accent md:w-64 md:mt-32"></div>
      </section>
      <Container className="bg-accent text-white text-center">
        <h1 className="text-4xl font-bold leading-loose">My story</h1>
        <p className="leading-loose">
          The point is... to live one&apos;s life in the full complexity of what
          one is, which is something much darker, more contradictory, more of a
          maelstrom of impulses and passions, of cruelty, ecstacy, and madness,
          than is apparent to the civilized being who glides on the surface and
          fits smoothly into the world.
        </p>
      </Container>
      <Container className="bg-accent2">
        <div className="border rounded border-main p-3">
          <p className="text-center text-main text-2xl font-thin">
            &quot;You either take control of your love life or it takes control
            of you. It’s that simple.&quot;
          </p>
        </div>
      </Container>
      <Container className="bg-accent2 text-center">
        <h2 className="text-2xl text-main font-bold leading-loose">
          My Mission
        </h2>
        <p className="leading-loose">
          The point is... to live one&apos;s life in the full complexity of what
          one is, which is something much darker, more contradictory, more of a
          maelstrom of impulses and passions, of cruelty, ecstacy, and madness,
          than is apparent to the civilized being who glides on the surface and
          fits smoothly into the world.
        </p>
      </Container>
      <Container className="bg-main text-white">
        <section id="contact">
          <ContactForm />
        </section>
      </Container>
    </Layout>
  );
}

export default IndexPage;
