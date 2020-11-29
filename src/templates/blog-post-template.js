import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";

export function BlogPostPageTemplate({ title, body }) {
  return (
    <Container>
      <h1 className="text-4xl font-bold leading-loose lg:text-6xl lg:mb-4">
        {title}
      </h1>

      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Container>
  );
}
BlogPostPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default function BlogPostPage({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <SEO
        keywords={[`life coach`, `counseling`, `nlp coach`]}
        title={frontmatter.title}
      />
      <BlogPostPageTemplate title={frontmatter.title} body={html} />
    </Layout>
  );
}

BlogPostPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.string,
    }),
  }),
};

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
