import React from 'react';
import Meta from 'components/meta';
import { ProjectPanel } from 'components/project';
import { projects } from 'data/projects.json';
import styles from './styles.module.css';

const Work = () => (

  <div>

    <Meta title="Projects" description="Sample UX Design And Front End Projects" />

    <div>
      {projects.map(project => <ProjectPanel project={project} key={project.slug} />)}
    </div>

    <div className={styles.post}>
      <p>Watch this space for more updates. <a href="mailto:emily@emily-young.com?subject=Hello">Get in touch</a> if you’re looking for a particular type of project.</p>
      <p>In the mean time, You can see some latest snippets on <a href="https://dribbble.com/livingincircuits">Dribbble</a>.</p>
    </div>

  </div>

);

export default Work;
