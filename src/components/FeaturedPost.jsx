import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const FeaturedPost = ({ path, category, date, title }) => (

  <Link className="post-block__item" to={path}>

    <div className="post-block__bordered">

      <div className="post-block__content">
        <h2 className="post-block__title">
          {title}
        </h2>
        <p className="post-block__date">
          {date}
        </p>
      </div>

    </div>

  </Link>

);

export default FeaturedPost;

FeaturedPost.propTypes = {
  path: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

FeaturedPost.defaultProps = {
  category: 'User Experience',
};
