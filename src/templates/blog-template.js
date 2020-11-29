import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";

export function BlogPageTemplate({ title, content, posts }) {
  console.log(posts);
  return (
    <>
      <Container className="bg-accent text-white text-center lg:text-left lg:p-32">
        <h1 className="text-4xl font-bold leading-loose lg:text-6xl lg:mb-4">
          {title}
        </h1>
        <p className="leading-loose">{content}</p>
      </Container>
      <Container className="bg-main text-white text-center lg:text-left lg:p-32">
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <h5>{post.frontmatter.title}</h5>
              <span>{post.frontmatter.date}</span>
              <hr />
              <p>{post.excerpt}</p>
            </div>
          ))}
      </Container>
    </>
  );
}
BlogPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object),
};

export default function BlogPage({ data }) {
  const { frontmatter } = data.markdownRemark;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO keywords={[`life coach`, `counseling`, `nlp coach`]} title="Blog" />
      <BlogPageTemplate
        title={frontmatter.title}
        content={frontmatter.content}
        posts={posts}
      />
    </Layout>
  );
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    allMarkdownRemark: PropTypes.object,
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post-template" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
