/* eslint max-len: 0 */
/* eslint react/no-unescaped-entities: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import Header from '../components/Header';
import { SEO, Content, Layout } from 'elements';
import Suggestions from '../components/Suggestions';

const Project = ({ pageContext: { slug, left, right }, data: { markdownRemark: postNode } }) => {
  const post = postNode.frontmatter;
  const { fluid } = post.landscape.childImageSharp;
  if (!post.id) {
    post.id = slug;
  }
  return (
    <Layout>

      <SEO postPath={slug} postNode={postNode} postSEO />

      <div className="page-inner">

        <ul className="project__meta">
          <li className="project__meta-item">
            <h1>Client</h1>
            {post.customer}
          </li>
          <li className="project__meta-item">
            <h1>Role</h1>
            {post.task}
          </li>
          <li className="project__meta-item">
            <h1>Team</h1>
            {post.company}
          </li>
        </ul>

        <section className="project__img">
          <Img fluid={fluid} />
        </section>

        <section className="callout">
          <div className="page-content align-central">
            <h2 className="callout__title">Activities</h2>
            <p>
              {post.activities}
            </p>
          </div>
        </section>

        <article className="content page-content" type="article">
          <Content input={postNode.html} />
        </article>

        <section>
          <h3 className="heading align-central">
            More Projects
          </h3>
          <Suggestions left={left} right={right} />
        </section>

      </div>

    </Layout>
  );
};

export default Project;

Project.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        customer
        task
        company
        activities
        cover {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
        landscape {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
      fields {
        slug
        sourceInstanceName
      }
    }
  }
`;
