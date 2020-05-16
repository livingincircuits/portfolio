import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Layout } from 'elements';
import config from '../../config/website';
import ItemBlog from '../components/ItemBlog';
import Header from '../components/Header';

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <Helmet title={`Blog | ${config.siteTitle}`} />
    <Header title="Blog">Blog</Header>
    <section className="page-inner">
      <div className="post-block post-block--full">
        {edges.map(post => (
          <ItemBlog
            key={post.node.frontmatter.title}
            path={post.node.fields.slug}
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            category={post.node.frontmatter.category}
            timeToRead={post.node.timeToRead}
            excerpt={post.node.excerpt}
          />
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "blog" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 170)
          timeToRead
          frontmatter {
            title
            date(formatString: "DD. MMMM YYYY", locale: "en")
            category
          }
        }
      }
    }
  }
`;
