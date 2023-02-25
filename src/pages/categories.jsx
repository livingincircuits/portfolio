import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import size from 'lodash/size';
import { Helmet } from 'react-helmet';
import { Layout } from 'elements';
import config from '../../config/website';
import Header from '../components/Header';

const Categories = ({
  data: {
    allMarkdownRemark: { group, edges },
  },
}) => (
  <Layout>

    <Helmet title={`Category | ${config.siteTitle}`} />

    <Header title="Categories">
      All Categories
    </Header>

    <ul className="align-central">
      {group.map(category => (
        <li class="content">
          <Link key={category.fieldValue} to={`/categories/${kebabCase(category.fieldValue)}`}>
            {category.fieldValue} <span> {category.totalCount}</span>
          </Link>
        </li>
      ))}
    </ul>

  </Layout>
);

export default Categories;

Categories.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array.isRequired,
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query CategoriesPage {
    allMarkdownRemark(filter: {fields: {sourceInstanceName: {eq: "blog"}}}) {
      group(field: {frontmatter: {category: SELECT}}) {
        fieldValue
        totalCount
      }
      edges {
        node {
          id
        }
      }
    }
  }
`;
