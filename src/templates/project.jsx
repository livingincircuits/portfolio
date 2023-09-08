import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Header from '../components/Header';
import { SEO, Content, Layout } from 'elements';
import Suggestions from '../components/Suggestions';

const Project = ({ pageContext: { slug, title, left, right }, data: { markdownRemark: postNode } }) => {
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }
  return (
    <Layout>

      <SEO postPath={slug} postNode={postNode} postSEO />

      <div className="page-inner">

        <Header title={post.title}>
          {post.title}
        </Header>

        <ul className="project__meta">
          <li className="project__meta-item">
            <h2>Client</h2>
            {post.customer}
          </li>
          <li className="project__meta-item">
            <h2>Role</h2>
            {post.task}
          </li>
          <li className="project__meta-item">
            <h2>When</h2>
            {post.when}
          </li>
        </ul>

        <section className="callout">
          <div className="page-content align-central">
            <h2 className="callout__title">Activities</h2>
            <p>
              {post.activities}
            </p>
          </div>
        </section>

        <div className="page-text">
          <article className="content page-content" type="article">
            <Content input={postNode.html} />
          </article>
        </div>

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
        when
      }
      fields {
        slug
        sourceInstanceName
      }
    }
  }
`;
