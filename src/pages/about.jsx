/* eslint max-len: 0 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from 'elements';
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
            I've been in the digital field for 15 years, spending the last 9 focused on getting to know users better. 
            Starting as a marketing and research analyst, developed a love of software engineering, moved into testing, design, UX and finally user research.
          </p>
          <p>
            I love helping organisations understand what their users think, need, and want. I enjoy turning what we learn from user research into amazing apps, websites, and services.  
            I'm really passionate about making sure everyone can access and enjoy products and services.
          </p>
          <p>
            At Telus, I've found the perfect blend of sharing a pot of tea with our users, diving into data, swapping war stories with senior stakeholders and supporting my fantastic research team. 
            I work closely with the Product and Customer Support teams, among others, to make sure we always keep our users' needs and perspectives at the forefront of everything we do.
          </p>

          <h2>
            Knowledge & Expertise
          </h2>

          <p>
            I have a range of skills across the digital design and development world but the below are a few:
          </p>

          <ul>
            <li>
              User Research
            </li>
            <li>
              User Experience Design
            </li>
            <li>
              User Experience &amp; Design Research
            </li>
            <li>
              Prototyping &amp; Interaction
            </li>
          </ul>

          <h2>
            Working
          </h2>

          <p>
            I am currently serving as a Senior Lead UX Researcher for <a href="https://www.telus.com/en/health">Telus Health</a>.
          </p>

        </div>

      </div>

    </section>

  </Layout>
);

export default About;
