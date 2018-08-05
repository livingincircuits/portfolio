/* eslint max-len: 0 */

import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { Layout } from 'elements';
import Img from 'gatsby-image';
import Header from '../components/Header';
import config from '../../config/website';
import FeaturedProject from '../components/FeaturedProject';
import FeaturedPost from '../components/FeaturedPost';

const Index = ({
  data: {
    projects: { edges: projectEdges },
    posts: { edges: postEdges },
  },
}) => (
  <Layout>

    <Helmet title={`Emily Young | ${config.siteTitle}`} />

    <Header title="Emily Young">
      Emily Young
    </Header>

    <section className="page-inner">

      <p>
        A UX Designer who loves to create clean, simple & inclusive experiences for everyone.
        I enjoy creating something simple from a complex problem and love creating human experiences on the web.
      </p>

      <div className="card-column">
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

      <div className="featured-post">
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
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "projects" } } }
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
                fluid(maxWidth: 1000, quality: 90, traceSVG: { color: "#2B2B2F" }) {
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
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "blog" } } }
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
