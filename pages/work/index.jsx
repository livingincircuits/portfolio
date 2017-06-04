import React from 'react';
import Meta from 'components/meta';
import { ProjectPanel } from 'components/project';
import { projects } from 'data/projects.json';
import styles from './styles.module.css';

const Work = () => (

  <div>

    <Meta title="Work" description="" />

    {projects.map(project => <ProjectPanel project={project} key={project.slug} />)}

  </div>

);

export default Work;
