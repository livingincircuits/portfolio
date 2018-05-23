import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Meta from 'components/meta';
import { Link } from 'react-router';
import styles from './styles.module.css';

const About = () => (

  <div>

    <h1 className="pinline">
      <svg className="pinline__svg pinline__svg--top" width="80" height="60" viewBox="5 0 80 60">
        <path className="wave" fill="none" stroke="#FFF" strokeWidth="4" strokeLinecap="round" d="M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15" />
      </svg>
      <span>
        About
      </span>
      <svg className="pinline__svg pinline__svg--bottom" width="80" height="40" viewBox="5 0 80 40">
        <path className="wave" fill="none" stroke="#FFF" strokeWidth="4" strokeLinecap="round" d="M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15" />
      </svg>
    </h1>

    <div className="markdown">

      <Meta title="About" />

      <Meta title="About" description="Emily Young is a UX Designer and Developer from Yorkshire UX Designer and Developer who loves to create clean, simple and inclusive experiences" />

      <h2>
        Hello World.
      </h2>

      <p>
        I'm Emily and I am a UX designer and multipotentialite.
      </p>

      <h2>
        Knowledge & Expertise
      </h2>

      <p>
        I have a range of skills across the digital design and development world but the below are a few:
      </p>

      <ul>
        <li>
          User Experience &amp; Research
        </li>
        <li>
          Interaction &amp; UI Design
        </li>
        <li>
          Prototyping
        </li>
        <li>
          HTML / CSS / JS
        </li>
      </ul>

      <h2>
        Working
      </h2>

      <p>
        I am currently serving as a UX Designer for <a href="https://skybetcareers.com/about-us">Sky Betting & Gaming</a>.
      </p>

    </div>

  </div>

);

export default About;
