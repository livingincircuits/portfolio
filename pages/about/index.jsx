import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Meta from 'components/meta';
import { Link } from 'react-router';
import styles from './styles.module.css';

const About = () => (

  <div className="markdown">

    <Meta title="About" />

    <Meta title="About" description="Emily Young is a UX Designer and Developer from Yorkshire UX Designer and Developer who loves to create clean, simple and inclusive experiences" />

    <div>

      <h1>Hello World.</h1>

      <p>
        I'm Emily and I am a UX designer.
      </p>

      <h2>
        Knowledge & Expertise
      </h2>

      <ul>
        <li>
          UCD process
        </li>
        <li>
          Working in an Agile team
        </li>
        <li>
          Front End Development
        </li>
        <li>
          User Research
        </li>
        <li>
          Interaction &amp; UI Design
        </li>
        <li>
          Prototyping &amp; Testing Including Hi-Fi &amp; Lo-Fi Wireframes
        </li>
        <li>
          User Story Development
        </li>
        <li>
          User Journey Mapping
        </li>
        <li>
          Quantitative Survey
        </li>
        <li>
          Competitive Audits
        </li>
        <li>
          Persona Creation
        </li>
        <li>
          A/B Testing
        </li>
        <li>
          Conducting Usability Tests & Observations.
        </li>
      </ul>

      <h2>
        Favourite Tools
      </h2>

      <ul>
        <li>
          Sketch
        </li>
        <li>
          Invision
        </li>
        <li>
          Marvel App
        </li>
        <li>
          Zeplin
        </li>
      </ul>

      <h2>
        Study
      </h2>

      <p>
        I hold an <a href="https://www.studydigital.co.uk/">FdA in Web Design</a>, enrolled at Interaction Design Foundation and currently studying Computing & IT and Psychology.
      </p>

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
