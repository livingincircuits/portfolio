import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Suggestions = ({ left, right }) => (

  <div className="post-block post-block--half">

    {left && (
      <Link className="post-block__item" to={left.fields.slug}>

        <article className="post-block__bordered">

          <div className="post-block__content">
            <h2 className="post-block__title">
              {left.frontmatter.title}
            </h2>
          </div>

        </article>

      </Link>
    )}

    {right && (
      <Link className="post-block__item" to={right.fields.slug}>

        <article className="post-block__bordered">

          <div className="post-block__content">
            <h2 className="post-block__title">
              {right.frontmatter.title}
            </h2>
          </div>

        </article>

      </Link>
    )}

  </div>

);

export default Suggestions;

Suggestions.propTypes = {
  left: PropTypes.any.isRequired,
  right: PropTypes.any.isRequired,
};
