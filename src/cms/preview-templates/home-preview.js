import React from "react";
import PropTypes from "prop-types";
import { HomePageTemplate } from "../../templates/homeTemplate";

const HomePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  //entry.
  if (!data) return <div>Loading...</div>;

  if (!data.portraitImage) return <div>Must include an image!</div>;

  if (data.portraitImage.image)
    data.portraitImage.image = getAsset(data.portraitImage.image);

  console.log(data);

  return (
    <HomePageTemplate
      portraitImage={data.portraitImage}
      title={data.title}
      subTitle={data.subTitle}
      goToContactButtonText={data.goToContactButtonText}
    />
  );
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default HomePagePreview;
