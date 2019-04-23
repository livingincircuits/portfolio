/* eslint max-len: 0 */

import React from 'react';
import Helmet from 'react-helmet';
import { Container, Layout } from 'elements';
import Header from '../components/Header';
import config from '../../config/website';

const About = () => (
  <Layout>

    <Helmet title={`About | ${config.siteTitle}`} />

    <Header title="About">
      About
    </Header>

    <section className="page-inner content">

      <div className="page-text">

        <div className="page-content">

          <h2>
            Hello World.
          </h2>

          <p>
            I'm Emily and I am a UX Researcher.
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
            I am currently serving as a UX Researcher for <a href="https://skybetcareers.com/about-us">Sky Betting & Gaming</a>.
          </p>

        </div>

      </div>

    </section>

  </Layout>
);

export default About;
