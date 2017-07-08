import React, { PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';
import styles from './styles.module.css';

const ProjectPanel = ({ project }) => (

  <h2 className={styles.post}>
    <Link to={prefixLink(`/work/${project.slug}/`)}>
      {project.title}
    </Link>
  </h2>

);

ProjectPanel.propTypes = {
  project: PropTypes.object,
};

export default ProjectPanel;
