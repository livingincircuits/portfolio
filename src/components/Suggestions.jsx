import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Suggestions = ({ left, right }) => (

  <div className="featured-post">

    {left && (
      <section className="featured-post__item">
        <Link to={left.fields.slug}>
          <h3>
            {left.frontmatter.title}
          </h3>
        </Link>
      </section>
    )}

    {right && (
      <section className="featured-post__item">
        <Link to={right.fields.slug}>
          <h3>
            {right.frontmatter.title}
          </h3>
        </Link>
      </section>
    )}

  </div>

);

export default Suggestions;

Suggestions.propTypes = {
  left: PropTypes.any.isRequired,
  right: PropTypes.any.isRequired,
};
