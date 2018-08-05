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

      <ul className="logos">
        <li className="logos__item">
          <img src="./logos/uoe-logo.svg" alt="University of Essex" />
        </li>
        <li className="logos__item">
          <img src="./logos/uom-logo.svg" alt="University of Manchester" />
        </li>
        <li className="logos__item">
          <img src="./logos/uos-logo.svg" alt="University of Sheffield" />
        </li>
        <li className="logos__item">
          <img src="./logos/topman-logo.svg" alt="Topman" />
        </li>
        <li className="logos__item">
          <img src="./logos/3m-logo.svg" alt="3m" />
        </li>
        <li className="logos__item">
          <img src="./logos/bentley-logo.svg" alt="Bentley" />
        </li>
        <li className="logos__item">
          <img src="./logos/nhs-logo.svg" alt="NHS" />
        </li>
        <li className="logos__item">
          <img src="./logos/skybet-logo.svg" alt="SkyBet" />
        </li>
      </ul>

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
