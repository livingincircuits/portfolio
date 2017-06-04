import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Meta from 'components/meta';
import styles from './styles.module.css';

const ProjectPage = ({ children, className, project }) => (

  <div className={classNames(styles[project.className], className)}>

    <Meta title={project.title} description={project.description} />

    {children}

  </div>

);

ProjectPage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
  project: PropTypes.object,
};

export default ProjectPage;
