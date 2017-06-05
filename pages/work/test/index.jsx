import React from 'react';
import { projects } from 'data/projects.json';
import { ProjectIntro, ProjectPage } from 'components/project';
import styles from './styles.module.css';

const test = () => {

  const project = projects.find(_project => _project.slug === 'test');

  return (

    <ProjectPage project={project}>

      <ProjectIntro project={project} />

    </ProjectPage>

  );

};

export default test;
