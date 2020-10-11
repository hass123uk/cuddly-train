import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import ContactForm from "../components/contact-form";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <Container className="bg-main text-white">
        <section>
          <ContactForm />
        </section>
      </Container>
    </Layout>
  );
}

export default ContactPage;
