import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Layout } from 'elements';
import config from '../../config/website';
import Header from '../components/Header';
import ItemTagCategory from '../components/ItemTagCategory';

const Category = ({
  pageContext: { category },
  data: {
    allMarkdownRemark: { edges, totalCount },
  },
}) => (

  <Layout>

    <Helmet title={`${category} | ${config.siteTitle}`} />

    <Header title={category}>
      Category
    </Header>

    <section className="page-inner">
      {edges.map(edge => (
        <ItemTagCategory
          key={edge.node.frontmatter.title}
          title={edge.node.frontmatter.title}
          category={edge.node.frontmatter.category}
          path={edge.node.fields.slug}
          date={edge.node.frontmatter.date}
          timeToRead={edge.node.timeToRead}
          excerpt={edge.node.excerpt}
        />
      ))}
    </section>

    <div className="align-central">

      <Link className="btn" to={`/categories/`}>
        View all Categories
      </Link>

    </div>

  </Layout>

);

export default Category;

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 300)
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
