import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import ContactForm from "../components/contact-form";
import Landing from "../components/landing";

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`life coach`, `counseling`, `nlp coach`]} title="Home" />

      <Landing />

      <div className="md:flex">
        <Container className="bg-accent text-white text-center md:text-left md:p-32 md:flex-1">
          <h1 className="text-4xl font-bold leading-loose md:text-6xl md:mb-4">My story</h1>
          <p className="leading-loose">
            The point is... to live one&apos;s life in the full complexity of
            what one is, which is something much darker, more contradictory,
            more of a maelstrom of impulses and passions, of cruelty, ecstacy,
            and madness, than is apparent to the civilized being who glides on
            the surface and fits smoothly into the world. The point is... to
            live one&apos;s life in the full complexity of what one is, which is
            something much darker, more contradictory, more of a maelstrom of
            impulses and passions, of cruelty, ecstacy, and madness, than is
            apparent to the civilized being who glides on the surface and fits
            smoothly into the world. The point is... to live one&apos;s life in
            the full complexity of what one is, which is something much darker,
            more contradictory, more of a maelstrom of impulses and passions, of
            cruelty, ecstacy, and madness, than is apparent to the civilized
            being who glides on the surface and fits smoothly into the world.
          </p>
        </Container>

        <Container className="bg-accent2 md:flex-1 md:my-auto">
          <div className="border rounded border-main p-3 md:p-12">
            <p className="text-center text-main text-2xl font-thin md:font-normal md:text-5xl">
              &quot;You either take control of your love life or it takes
              control of you. It’s that simple.&quot;
            </p>
          </div>
        </Container>
      </div>

      <Container className="bg-accent2 text-center md:text-left md:p-32 md:w-2/3">
        <h2 className="text-2xl text-main font-bold leading-loose md:text-4xl md:mb-4">
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
        <section id="contact" style={{scrollMarginTop: "6rem"}}>
          <ContactForm />
        </section>
      </Container>
    </Layout>
  );
}

export default IndexPage;
