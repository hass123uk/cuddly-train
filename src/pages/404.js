import React from "react";
import { Link } from "gatsby";
import Container from "../components/container";
import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Container className="bg-main text-white text-center lg:text-left lg:p-32 lg:flex-1">
          <h1 className="text-4xl font-bold leading-loose lg:text-6xl lg:mb-4">Page not found</h1>
          <p className="leading-loose">
            An error occurred and the page you are looking for could not be found. 
          </p>
          <Link to="/">
              <button
                type="button"
                className="bg-accent rounded-full py-2 px-4 my-5"
                aria-label="Go to home page"
                aria-controls="navigation"
              >
                Home
              </button>
            </Link>
        </Container>
    </Layout>
  );
}

export default NotFoundPage;
