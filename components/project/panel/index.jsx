import React, { PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';
import styles from './styles.module.css';

const ProjectPanel = ({ project }) => (

  <Link to={prefixLink(`/work/${project.slug}/`)} className={styles[project.className]}>

    <section className={styles.inner}>

      <div className={styles.content}>

        <h2>
          {project.title}
        </h2>

        <p>
          {project.description}
        </p>

      </div>

    </section>

  </Link>

);

ProjectPanel.propTypes = {
  project: PropTypes.object,
};

export default ProjectPanel;
