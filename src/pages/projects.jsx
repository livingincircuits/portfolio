import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
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

    <Header title="Work">
      Work
    </Header>

    <section className="page-inner">

      <div className="page-content align-central">

        <p>
          The below is a sample of work that I am able to share.
        </p>

      </div>

      <div className="post-block post-block--full">
        {edges.map(project => (
          <ItemProject
            key={project.node.frontmatter.title}
            path={project.node.fields.slug}
            customer={project.node.frontmatter.customer}
            title={project.node.frontmatter.title}
            task={project.node.frontmatter.task}
            activities={project.node.frontmatter.activities}
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
      sort: {frontmatter: {date: DESC}}
      filter: {fields: {sourceInstanceName: {eq: "projects"}}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            customer
            task
            activities
          }
        }
      }
    }
  }
`;
