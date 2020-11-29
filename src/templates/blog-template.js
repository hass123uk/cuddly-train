import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export function BlogPageTemplate({ title, content }) {
  return (
    <>
      <div
        className={`max-w-4xl px-4 py-8 mx-auto lg:max-w-full bg-accent
          text-white text-center lg:text-left lg:p-32 lg:flex-1`}
      >
        <h1 className="text-4xl font-bold leading-loose lg:text-6xl lg:mb-4">
          {title}
        </h1>
        <p className="leading-loose">{content}</p>
      </div>
    </>
  );
}
BlogPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default function BlogPage({ data }) {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <SEO keywords={[`life coach`, `counseling`, `nlp coach`]} title="Blog" />
      <BlogPageTemplate
        title={frontmatter.title}
        content={frontmatter.content}
      />
    </Layout>
  );
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export const pageQuery = graphql`
  query BlogPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "blog-template" } }) {
      frontmatter {
        title
        content
      }
    }
  }
`;
