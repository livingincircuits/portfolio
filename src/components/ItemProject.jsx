import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const ItemProject = ({ path, title }) => (

  <div className="card">

    <Link className="card__link" to={path}>

      <p className="card__tag">Case Study</p>

      <h2 className="card__title">
        {title}
      </h2>

    </Link>

  </div>

);

export default ItemProject;

ItemProject.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};