import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const FeaturedPost = ({ path, category, date, title }) => (

  <Link className="featured-post__item" to={path}>

    <h2>
      {title}
    </h2>

    <div>
      <h3>
        {date}
      </h3>
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
