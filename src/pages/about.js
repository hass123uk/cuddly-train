import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
      <Container className="bg-accent text-white text-center">
        <h1 className="text-4xl font-bold leading-loose">My story</h1>
        <p className="leading-loose">
          The point is... to live one&apos;s life in the full complexity of
          what one is, which is something much darker, more contradictory,
          more of a maelstrom of impulses and passions, of cruelty, ecstacy,
          and madness, than is apparent to the civilized being who glides on
          the surface and fits smoothly into the world.
          </p>
      </Container>
      <Container className="bg-accent2">
        <div className="border rounded border-main p-3">
          <p className="text-center text-main text-2xl font-thin">
            &quot;You either take control of your love life or it takes control of you. It’s that simple.&quot;
          </p>
        </div>
      </Container>
      <Container className="bg-accent2 text-center">
        <h1 className="text-2xl text-main font-bold leading-loose">My Mission</h1>
        <p className="leading-loose">
          The point is... to live one&apos;s life in the full complexity of
          what one is, which is something much darker, more contradictory,
          more of a maelstrom of impulses and passions, of cruelty, ecstacy,
          and madness, than is apparent to the civilized being who glides on
          the surface and fits smoothly into the world.
          </p>
      </Container>
    </Layout>
  );
}

export default AboutPage;
