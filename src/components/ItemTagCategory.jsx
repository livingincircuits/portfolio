import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

const ItemTagCategory = ({ category, path, title, date, timeToRead, excerpt }) => (

    <article className="article-item">

      <Link to={path}>

        <h2 className="article-item__title">
          {title}
        </h2>

        <p className="article-item__ttr">
          {date} &mdash; Time to Read: {timeToRead} Min
        </p>

        <p className="article-item__text">
          {excerpt}
        </p>

      </Link>

    </article>

);

export default ItemTagCategory;

ItemTagCategory.propTypes = {
  category: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  excerpt: PropTypes.string.isRequired,
};
