import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Layout } from 'elements';
import config from '../../config/website';
import ItemProject from '../components/ItemProject';
import Header from '../components/Header';

const Projects = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>

    <Helmet title={`Projects | ${config.siteTitle}`} />

    <Header title="Projects">
      Projects
    </Header>

    <section className="page-inner">

      <div className="page-content align-central">

        <p>
          The below is a sample of work that I am able to share in the public domain.
        </p>

      </div>

      <div className="card-column">
        {edges.map(project => (
          <ItemProject
            key={project.node.frontmatter.title}
            path={project.node.fields.slug}
            cover={project.node.frontmatter.cover.childImageSharp.fluid}
            customer={project.node.frontmatter.customer}
            title={project.node.frontmatter.title}
          />
        ))}
      </div>

    </section>

  </Layout>
);

export default Projects;

Projects.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "projects" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            customer
            cover {
              childImageSharp {
                fluid(maxWidth: 900, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
