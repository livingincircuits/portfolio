import React from 'react';
import Meta from 'components/meta';
import { ProjectPanel } from 'components/project';
import { projects } from 'data/projects.json';
import styles from './styles.module.css';

const Work = () => (

  <div>

    <Meta title="Projects" description="Sample UX Design And Front End Projects" />

    <h1 className="pinline">
      <svg className="pinline__svg pinline__svg--top" width="80" height="60" viewBox="5 0 80 60">
        <path className="wave" fill="none" stroke="#FFF" strokeWidth="4" strokeLinecap="round" d="M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15" />
      </svg>
      <span>
        Work
      </span>
      <svg className="pinline__svg pinline__svg--bottom" width="80" height="40" viewBox="5 0 80 40">
        <path className="wave" fill="none" stroke="#FFF" strokeWidth="4" strokeLinecap="round" d="M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15" />
      </svg>
    </h1>

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
