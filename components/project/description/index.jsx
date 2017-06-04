import React, { PropTypes } from 'react';
import styles from './styles.module.css';

const ProjectDescription = ({ children, media }) => (
  <div className={styles.content}>
    <div className={styles.media}>
      {media}
    </div>

    <div className={styles.information}>
      {children}
    </div>
  </div>
);

ProjectDescription.propTypes = {
  children: PropTypes.node,
  media: PropTypes.node,
};

export default ProjectDescription;
