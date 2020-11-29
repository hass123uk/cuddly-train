import React from "react";
import PropTypes from "prop-types";
import { BlogPageTemplate } from "../../templates/blog-template";

const BlogPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  if (!data) return <div>Loading...</div>;

  return <BlogPageTemplate title={data.title} content={data.content} />;
};

BlogPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default BlogPagePreview;
