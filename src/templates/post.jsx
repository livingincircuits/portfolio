import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { Content, SEO, Layout } from 'elements';
import Suggestions from '../components/Suggestions';

const Post = ({ pageContext: { slug, left, right }, data: { markdownRemark: postNode } }) => {
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }

  return (

    <Layout>

      <SEO postPath={slug} postNode={postNode} postSEO />

      <div className="page-inner">

        <section className="article-header">
          <h1 className="article-header__title">
            {post.title}
          </h1>
          <p className="article-header__text content">
            {post.date} &middot; Time to Read: {postNode.timeToRead} Min
            <span>
              Category: <Link to={`/categories/${kebabCase(post.category)}`}>{post.category}</Link>
            </span>
          </p>
        </section>

        <article className="content" type="article">
          <Content input={postNode.html} />
        </article>

        <section>
          <h3 className="heading align-central">
            More Posts
          </h3>
          <Suggestions left={left} right={right} secondary />
        </section>

      </div>

    </Layout>

  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date(formatString: "DD. MMMM YYYY", locale: "en")
        category
      }
      fields {
        slug
        sourceInstanceName
      }
    }
  }
`;
