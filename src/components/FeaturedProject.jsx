import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const FeaturedProject = ({ cover, path, title }) => (

  <div className="card">

    <Link className="card__link" to={path}>

      <Img className="card__img" fluid={cover} />

      <h2 className="card__project">
        {title}
      </h2>

      <div className="card__title">
        <svg viewBox="0 0 400 90" version="1.1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="mask" x="0" y="0" width="100%" height="100%">
              <rect id="alpha" x="0" y="0" width="100%" height="100%"></rect>
              <text className="title" dx="50%" dy="1.3em">Case Study</text>
            </mask>
          </defs>
          <rect id="base" x="0" y="0" width="100%" height="100%"></rect>
        </svg>
      </div>

    </Link>

  </div>

);

export default FeaturedProject;

FeaturedProject.propTypes = {
  cover: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
