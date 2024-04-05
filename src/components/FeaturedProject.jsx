import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const FeaturedProject = ({ path, title, task, activities }) => (

    <Link className="post-block__item" to={path}>

    <div className="post-block__bordered">

      <div className="post-block__content">
        <h2 className="post-block__title">
          {title}
        </h2>
        <p className="post-block__text">
          {task}
        </p>
        <p className="post-block__desc">
          {activities}
        </p>
      </div>

    </div>

  </Link>

);

export default FeaturedProject;

FeaturedProject.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
