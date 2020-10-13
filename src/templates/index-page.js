import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import heroImage from "../img/hero.svg";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  skills,
  projects,
}) => (
  <>
    {/* Hero */}
    <section className="hero is-white is-large">
      <div className="hero-body">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column">
                <div className="section">
                  <h1 className="title">{heading}</h1>
                  <h3 className="subtitle">{subheading}</h3>
                  <a
                    className="button hero-button"
                    href="#contact"
                    rel="noopener noreferrer"
                  >
                    Contact me
                  </a>
                </div>
              </div>
              <div className="column">
                <div className="has-text-centered">
                  <img src={heroImage} alt="" style={{ width: "400px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Projects */}
    <section id="projects" className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {projects.heading}
                  </h3>
                </div>
              </div>
              <div className="columns is-multiline">
                {projects.projectsList.map((item) => (
                  <div key={item.title} className="column is-6">
                    <section className="section card">
                      <div className="has-text-centered">
                        <div
                          style={{
                            width: "240px",
                            display: "inline-block",
                          }}
                        >
                          <PreviewCompatibleImage imageInfo={item.image} />
                        </div>
                      </div>
                      <h4 className="has-text-weight-semibold is-size-4">
                        {item.title}
                      </h4>
                      <p>{item.text}</p>
                      <a
                        className="button"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.link}
                      >
                        Demo
                      </a>
                      <a
                        className="button"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.repo}
                      >
                        Github Repo
                      </a>
                    </section>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Skills */}
    <section id="skills" className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">Skills</h3>
                </div>
              </div>
              <div id="skills-list" className="columns is-multiline">
                {skills.map((item, index) => (
                  <div className="column has-text-centered" key={index}>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ContactForm />
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  projects: PropTypes.object,
  skills: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        projects={frontmatter.projects}
        skills={frontmatter.skills}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        projects {
          heading
          projectsList {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
            link
            repo
          }
        }
        skills {
          text
        }
      }
    }
  }
`;
