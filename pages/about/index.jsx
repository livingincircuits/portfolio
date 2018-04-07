import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Meta from 'components/meta';
import { Link } from 'react-router';
import styles from './styles.module.css';

const About = () => (

  <div>

    <h1 className="pinline">
      <span>
        About
      </span>
    </h1>

    <div className="markdown">

      <Meta title="About" />

      <Meta title="About" description="Emily Young is a UX Designer and Developer from Yorkshire UX Designer and Developer who loves to create clean, simple and inclusive experiences" />

      <h1>Hello World.</h1>

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
          Interaction &amp; UI Design
        </li>
        <li>
          User Research
        </li>
        <li>
          Front End Development
        </li>
        <li>
          Prototyping
        </li>
        <li>
          Conducting Usability Tests & Observations
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
