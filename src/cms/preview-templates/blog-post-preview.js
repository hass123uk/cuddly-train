import React from "react";
import PropTypes from "prop-types";
import { BlogPostPageTemplate } from "../../templates/blog-post-template";

const BlogPostPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (!data) return <div>Loading...</div>;
  
  return <BlogPostPageTemplate title={data.title} body={data.body} />;
};

BlogPostPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default BlogPostPagePreview;
