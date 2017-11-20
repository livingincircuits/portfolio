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
        I'm a UX developer who likes to design human experiences on the web. I share what I learn via this website.
      </p>

      <p>
        I enjoy creating something simple from a complex problem and much prefer working with a human centred design approach.
      </p>

      <figure className={styles.aside}>
        <header className={styles.aside__heading}>
          <h3 className={styles.aside__title}>
            Get In Touch
          </h3>
        </header>
        <ul className={styles.aside__list}>
          <li>
            <a href="https://www.linkedin.com/in/emily-jane-young/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://twitter.com/stickypopdesign">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/">
              Dribbble
            </a>
          </li>
          <li>
            <a href="mailto:emily@emily-young.com?subject=Hello">
              Email Me
            </a>
          </li>
        </ul>
      </figure>

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
          Interaction &amp; Interface Design
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
          Conducting Usability Tests
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
        Tools I have experience with
      </h2>

      <ul>
        <li>
          Axure
        </li>
        <li>
          Photoshop
        </li>
        <li>
          Illustrator
        </li>
        <li>
          XD
        </li>
        <li>
          Principle
        </li>
        <li>
          Flinto
        </li>
        <li>
          UX Pin
        </li>
      </ul>

      <h2>
        Study
      </h2>

      <p>
        I hold an <a href="https://www.studydigital.co.uk/">FdA in Web Design</a>, studied UX at General Assembly and enrolled at Interaction Design Foundation.
      </p>

      <h2>
        Working
      </h2>

      <p>
        I am currently serving as a UX Developer for <a href="http://www.hma.co.uk/">HMA</a>. Primarily working with the Health, Science &amp; Technology sectors.
      </p>

    </div>

  </div>

);

export default About;
