import React, { PropTypes } from 'react';
import styles from './styles.module.css';

const ProjectIntro = ({ cta, media, project }) => (
  <div className={styles.cover}>
    <div className={styles.intro}>
      <h1>{project.title}</h1>
      {cta || (
        <a href="{project.cta.link}">
          {project.cta.text}
        </a>
      )}
    </div>
    <div className={styles.media}>
      {media}
    </div>
  </div>
);

ProjectIntro.propTypes = {
  cta: PropTypes.node,
  media: PropTypes.node,
  project: PropTypes.object,
};

export default ProjectIntro;
