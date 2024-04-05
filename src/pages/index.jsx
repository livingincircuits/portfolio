/* eslint max-len: 0 */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { Layout } from 'elements';
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
          A User Researcher whose passion lies in crafting clean, intuitive, and inclusive experiences that resonate with a broad audience. 
          I am dedicated to distilling complex problems into elegantly simple solutions, always with the goal of enhancing digital human interactions.
        </p>
        <p>
          With over a decade of experience, I have been instrumental in integrating UX and User Research methodologies into various teams. 
          My expertise encompasses working with a wide range of stakeholders and influencing decision-making processes and product strategies. 
          My approach is deeply rooted in a commitment to understanding user needs and behaviors, ensuring that every project I undertake is user-centered and designed for impact.
        </p>
      </div>

      <div className="page-content">

        <h2 className="content">
          Featured Work
        </h2>

        <div className="post-block post-block--half">
          {projectEdges.map(project => (
            <FeaturedProject
              key={project.node.frontmatter.title}
              customer={project.node.frontmatter.customer}
              path={project.node.fields.slug}
              title={project.node.frontmatter.title}
              task={project.node.frontmatter.task}
              activities={project.node.frontmatter.activities}
            />
          ))}
        </div>

        {/*
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
        */}

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
            task
            activities
          }
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 3
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
