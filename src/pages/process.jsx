/* eslint max-len: 0 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Layout } from 'elements';
import Header from '../components/Header';
import config from '../../config/website';

const Process = () => (
  <Layout>

    <Helmet title={`Process | ${config.siteTitle}`} />

    <Header title="Process">
      Process
    </Header>

    <div className="page-inner content">

      <div className="page-content">

        <p>
          I take an approach that follows <a href="https://www.designcouncil.org.uk/news-opinion/design-process-what-double-diamond">The British Design Council's Double Diamond</a> very closely and simply change the methods I employ depending on the project.
        </p>

        <section className="">
          <h2>
            Discover
          </h2>
          <p>
          	The first phase is all about researching the product space, observing the end-user and understanding the people we are designing for. We identify patterns of behavior, gather insights, discover pain points and usability issues. This is where we start with questions and assumptions.
          </p>
          <h3>
            Methods
          </h3>
          <ul>
            <li>
              Stakeholder Interviews
            </li>
            <li>
              Contextual Inquiry
            </li>
            <li>
              Diary Studies
            </li>
            <li>
              Competitor Testing
            </li>
            <li>
              Analytics
            </li>
            <li>
              Sales & Support Interviews
            </li>
          </ul>
        </section>

        <section className="">
          <h2>
            Define
          </h2>
          <p>
            In this phase we start to synthesise our observations about our users into needs and insights. Our goal is to define a meaningful and actionable problem statement in the context of users and business needs.
          </p>
          <h3>
            Methods
          </h3>
          <ul>
            <li>
              Competitor Analysis
            </li>
            <li>
              Qualitative Analysis
            </li>
            <li>
              Stakeholder Workshops
            </li>
            <li>
              Card Sorting
            </li>
            <li>
              Survey
            </li>
            <li>
              Journey Mapping
            </li>
            <li>
              Persona Creation
            </li>
          </ul>
        </section>

        <section className="">
          <h2>
            Develop
          </h2>
          <p>
            In this phase we explore solutions to our problem by creating a working prototype to put in front of users. We then keep iterating and testing.
          </p>
          <h3>
            Methods
          </h3>
          <ul>
            <li>
              Wireframing & Sketching
            </li>
            <li>
              Rapid Prototyping
            </li>
            <li>
              Usability Testing
            </li>
          </ul>
        </section>

        <section className="">
          <h2>
            Deliver
          </h2>
          <p>
            Once we have feedback from our users, we can summarise our findings and share these with stakeholders and the team. We continue to observe our users and continue to validate our hypothesis.
          </p>
          <h3>
            Methods
          </h3>
          <ul>
            <li>
              Stakeholder Presentation
            </li>
            <li>
              Split Testing
            </li>
            <li>
              Report
            </li>
            <li>
              Feedback Review
            </li>
          </ul>
        </section>

      </div>

    </div>

  </Layout>
);

export default Process;
