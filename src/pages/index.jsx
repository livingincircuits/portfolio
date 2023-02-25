/* eslint max-len: 0 */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { Layout } from 'elements';
import Img from 'gatsby-image';
import Header from '../components/Header';
import config from '../../config/website';
import FeaturedPost from '../components/FeaturedPost';
import FeaturedProject from '../components/FeaturedProject';

const Index = ({
  data: {
    projects: { edges: projectEdges },
    posts: { edges: postEdges },
  },
}) => (
  <Layout>

    <Helmet title={`${config.siteTitle}`} />

    <Header title="Emily Young">
      Emily Young
    </Header>

    <section className="page-inner">

      <div className="page-content align-central">

        <p>
          A User Researcher who loves to create clean, simple & inclusive experiences for everyone.
          I enjoy creating something simple from a complex problem and love creating delightful digital human experiences.
        </p>
        <p>
          I’ve influenced the implementation of UX research in many teams and have more than 7 years of experience presenting insights
           to diverse stakeholders (C-suite and senior stakekeholders including Product Managers, Designers, Engineers, & Marketers).
        </p>

      </div>

      <div className="page-content align-central">

        <h2 className="content">
          Featured Work
        </h2>

        <div className="card-column featured-card">
          {projectEdges.map(project => (
            <FeaturedProject
              key={project.node.frontmatter.title}
              cover={project.node.frontmatter.cover.childImageSharp.fluid}
              customer={project.node.frontmatter.customer}
              path={project.node.fields.slug}
              title={project.node.frontmatter.title}
            />
          ))}
        </div>

        <h2 className="content">
          Featured Writing
        </h2>

        <div className="post-block post-block--half">
          {postEdges.map(post => (
            <FeaturedPost
              key={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              path={post.node.fields.slug}
              title={post.node.frontmatter.title}
              category={post.node.frontmatter.category}
            />
          ))}
        </div>

        </div>

    </section>

  </Layout>
);

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
    posts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    projects: allMarkdownRemark(
      limit: 2
      sort: {frontmatter: {date: DESC}}
      filter: {fields: {sourceInstanceName: {eq: "projects"}}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            customer
            title
            cover {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 90, traceSVG: {color: "#2B2B2F"}) {    
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 2
      sort: {frontmatter: {date: DESC}}
      filter: {fields: {sourceInstanceName: {eq: "blog"}}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
        }
      }
    }
  }
`;
