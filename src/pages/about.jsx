/* eslint max-len: 0 */

import React from 'react';
import { Helmet } from 'react-helmet';
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
            I'm Emily and I am a User Researcher.
          </p>
          <p>
            I use various research methods from surveys, to interviews and user testing, to gather insights from users
            in order to find solutions that will help improve products for everyone.
          </p>

          <h2>
            Knowledge & Expertise
          </h2>

          <p>
            I have a range of skills across the digital design and development world but the below are a few:
          </p>

          <ul>
            <li>
              User Experience &amp; Design Research
            </li>
            <li>
              Prototyping &amp; Interaction
            </li>
            <li>
              HTML / CSS / JS
            </li>
          </ul>

          <h2>
            Working
          </h2>

          <p>
            I am currently serving as a Lead UX Researcher for <a href="https://www.skybetcareers.com/">Sky Betting & Gaming</a>.
          </p>

        </div>

      </div>

    </section>

  </Layout>
);

export default About;
