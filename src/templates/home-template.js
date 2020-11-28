import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import ContactForm from "../components/contact-form";

export function HomePageTemplate({
  portraitImage,
  title,
  subTitle,
  goToContactButtonText,
  myStory,
  myMission,
  contactMe,
}) {
  const portraitImageSrc = portraitImage.image.childImageSharp
    ? portraitImage.image.childImageSharp.fluid.src
    : portraitImage.image;

  return (
    <>
      <section className="lg:h-screen">
        <div className="bg-main">
          <img
            src={portraitImageSrc}
            alt={portraitImage.imageAlt}
            className="lg:hidden mt-4 h-500 mx-auto"
          />

          <div className="max-w-4xl py-4 lg:py-0 lg:max-w-full lg:mb-64 lg:grid lg:grid-cols-2 lg:mx-auto">
            <div className="flex flex-col justify-center text-white text-center lg:text-left lg:pl-32">
              <h1 className="text-xl font-bold lg:text-7xl">{title}</h1>
              <p className="text-lg">{subTitle}</p>
              <Link to="#contact">
                <button
                  type="button"
                  className="bg-accent rounded-full py-2 px-4 my-5"
                  aria-label="Go to contact me page"
                  aria-controls="navigation"
                >
                  {goToContactButtonText}
                </button>
              </Link>
            </div>
            <div className="lg:relative">
              <img
                src={portraitImageSrc}
                alt={portraitImage.imageAlt}
                className="hidden lg:block h-667 w-452 absolute right-20 top-64"
              />

              <div
                style={{ maxWidth: "217px", height: 600, width: 217 }}
                className="hidden lg:block bg-accent lg:ml-auto lg:mt-32"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:flex">
        <Container className="bg-accent text-white text-center lg:text-left lg:p-32 lg:flex-1">
          <h1 className="text-4xl font-bold leading-loose lg:text-6xl lg:mb-4">
            {myStory.title}
          </h1>
          <p className="leading-loose">{myStory.content}</p>
        </Container>

        <Container className="bg-accent2 lg:flex-1 lg:my-auto">
          <div className="border rounded border-main p-3 lg:p-12">
            <p className="text-center text-main text-2xl font-thin lg:font-normal lg:text-5xl">
              &quot;{myStory.quote}&quot;
            </p>
          </div>
        </Container>
      </div>

      <Container className="bg-accent2 text-center lg:text-left lg:p-32 lg:w-2/3">
        <h2 className="text-2xl text-main font-bold leading-loose lg:text-4xl lg:mb-4">
          {myMission.title}
        </h2>
        <p className="leading-loose">{myMission.content}</p>
      </Container>

      <Container className="bg-main text-white">
        <section id="contact" style={{ scrollMarginTop: "6rem" }}>
          <ContactForm cmsData={contactMe} />
        </section>
      </Container>
    </>
  );
}
HomePageTemplate.propTypes = {
  portraitImage: PropTypes.shape({
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  goToContactButtonText: PropTypes.string.isRequired,
  myStory: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
  }),
  myMission: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  contactMe: PropTypes.object.isRequired,
};

export default function HomePage({ data }) {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <SEO keywords={[`life coach`, `counseling`, `nlp coach`]} title="Home" />
      <HomePageTemplate
        portraitImage={frontmatter.portraitImage}
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        goToContactButtonText={frontmatter.goToContactButtonText}
        myStory={frontmatter.myStory}
        myMission={frontmatter.myMission}
        contactMe={frontmatter.contactMe}
      />
    </Layout>
  );
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "home-template" } }) {
      frontmatter {
        portraitImage {
          image {
            childImageSharp {
              fluid(maxWidth: 452, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageAlt
        }
        title
        subTitle
        goToContactButtonText
        myStory {
          title
          content
          quote
        }
        myMission {
          title
          content
        }
        contactMe {
          title
          email
          messagePlaceHolder
          showNameFields
        }
      }
    }
  }
`;
