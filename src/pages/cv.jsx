/* eslint max-len: 0 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Layout } from 'elements';
import Header from '../components/Header';
import config from '../../config/website';

const Cv = () => (
  <Layout>

    <Helmet title={`Cv | ${config.siteTitle}`} />

    <section className="page-inner content">

      <div className="page-text">

        <div className="CV-page">

          <h1 className="CV-primaryHeading">
            <span className="CV-primaryHeading-name">Emily Young</span>
            <small className="CV-primaryHeading-position">User Experience Researcher</small>
          </h1>

          <p className="CV-introBlurb">
            I am a UK based User Experience and Researcher.
          </p>

          <hr />

          <div className="CV-grid">

            <div className="CV-grid-column CV-grid-column--left">

              <div className="CV-jobs">

                <h2 className="CV-secondaryHeading CV-jobs-heading">
                  Employment history
                </h2>

                <section className="CV-timeline CV-job">
                  <h3 className="CV-timeline-heading">
                    <span className="CV-timeline-heading-title">Senior UX Researcher </span>&#8211;
                    <span className="CV-timeline-heading-location">Sky Betting & Gaming </span>
                    <small className="CV-timeline-heading-duration">2017 to 2020</small>
                  </h3>
                  <ul className="CV-timeline-details">
                    <li className="CV-timeline-details-item">
                      Lorem ipsum dolar sit amet consectetur adipiscing elit lorem ipsum dolar sit amet consectetur adipiscing
                    </li>
                    <li className="CV-timeline-details-item">
                      Lorem ipsum dolar sit amet consectetur adipiscing elit lorem ipsum dolar sit amet consectetur adipiscing
                    </li>
                    <li className="CV-timeline-details-item">
                      Lorem ipsum dolar sit amet consectetur adipiscing elit lorem ipsum dolar sit amet consectetur adipiscing
                    </li>
                  </ul>
                </section>

                <section className="CV-timeline CV-job">
                  <h3 className="CV-timeline-heading">
                    <span className="CV-timeline-heading-title">UX Developer </span>&#8211;
                    <span className="CV-timeline-heading-location">Lorem Ipsum </span>
                    <small className="CV-timeline-heading-duration">2016 to 2017</small>
                  </h3>
                  <ul className="CV-timeline-details">
                    <li className="CV-timeline-details-item">
                      Lorem ipsum dolar sit amet consectetur adipiscing elit lorem ipsum dolar sit amet consectetur adipiscing
                    </li>
                    <li className="CV-timeline-details-item">
                      Lorem ipsum dolar sit amet consectetur adipiscing elit lorem ipsum dolar sit amet consectetur adipiscing
                    </li>
                    <li className="CV-timeline-details-item">
                      Lorem ipsum dolar sit amet consectetur adipiscing elit lorem ipsum dolar sit amet consectetur adipiscing
                    </li>
                  </ul>
                </section>

                <section className="CV-timeline CV-job">
                  <h3 className="CV-timeline-heading">
                    <span className="CV-timeline-heading-title">UX Developer </span>&#8211;
                    <span className="CV-timeline-heading-location">Lorem Ipsum </span>
                    <small className="CV-timeline-heading-duration">2016 to 2017</small>
                  </h3>
                  <ul className="CV-timeline-details">
                    <li className="CV-timeline-details-item">
                      Lorem ipsum dolar sit amet consectetur adipiscing elit lorem ipsum dolar sit amet consectetur adipiscing
                    </li>
                    <li className="CV-timeline-details-item">
                      Lorem ipsum dolar sit amet consectetur adipiscing elit lorem ipsum dolar sit amet consectetur adipiscing
                    </li>
                    <li className="CV-timeline-details-item">
                      Lorem ipsum dolar sit amet consectetur adipiscing elit lorem ipsum dolar sit amet consectetur adipiscing
                    </li>
                  </ul>
                </section>

              </div>

            </div>

            <div className="CV-grid-column CV-grid-column--right">

              <div className="CV-skills">
                <h2 className="CV-secondaryHeading CV-skills-heading">
                  Technical Skills
                </h2>
                <br /><br />
                <h3 className="CV-tertiaryHeading">
                  Core Specialty
                </h3>
                <ul className="CV-timeline-details">
                  <li className="CV-timeline-details-item">
                    Interface and form design
                  </li>
                  <li className="CV-timeline-details-item">
                    Responsive & device based web design
                  </li>
                  <li className="CV-timeline-details-item">
                    HTML/CSS/JavaScript
                  </li>
                  <li className="CV-timeline-details-item">
                    Wireframing & Prototyping
                  </li>
                  <li className="CV-timeline-details-item">
                    Accessibility
                  </li>
                </ul>
                <h3 className="CV-tertiaryHeading">
                  Extensive Experience
                </h3>
                <ul className="CV-timeline-details">
                  <li className="CV-timeline-details-item">
                    Design software (Adobe suite, Sketch, Axure)
                  </li>
                  <li className="CV-timeline-details-item">
                    Front-end build systems (Git, NPM, Grunt, Bower, Processors)
                  </li>
                  <li className="CV-timeline-details-item">
                    Information architecture
                  </li>
                  <li className="CV-timeline-details-item">
                    User Testing
                  </li>
                  <li className="CV-timeline-details-item">
                    Email design and development
                  </li>
                  <li className="CV-timeline-details-item">
                    Web animation
                  </li>
                </ul>
                <h3 className="CV-tertiaryHeading">
                  Proficient
                </h3>
                <ul className="CV-timeline-details">
                  <li className="CV-timeline-details-item">
                    Customer research
                  </li>
                  <li className="CV-timeline-details-item">
                    Front-end performance
                  </li>
                  <li className="CV-timeline-details-item">
                    Testing and code standards
                  </li>
                </ul>
              </div>

            </div>

          </div>

          <div className="CV-education">

            <h2 className="CV-secondaryHeading CV-education-heading">
              Education history
            </h2>

            <section className="CV-timeline CV-education-group">
              <h3 className="CV-timeline-heading">
                <span className="CV-timeline-heading-title">FdA Web Design </span>
                <span className="CV-timeline-heading-location">Wakefield University Center </span>
                <small className="CV-timeline-heading-duration">2010 – 2012</small>
              </h3>
              <ul className="CV-timeline-details">
                <li className="CV-timeline-details-item">
                  Lorem ipsum dolar sit amet
                </li>
              </ul>
            </section>

            <section className="CV-timeline CV-education-group">

              <h3 className="CV-timeline-heading">
                <span className="CV-timeline-heading-title">Professional training</span>
              </h3>

              <ul className="CV-timeline-details">
                <li className="CV-timeline-details-item">
                  2019: Lorem ipsum dolar sit amet
                </li>
                <li className="CV-timeline-details-item">
                  2016: Lorem ipsum dolar sit amet
                </li>
                <li className="CV-timeline-details-item">
                  2015: Lorem ipsum dolar sit amet
                </li>
                <li className="CV-timeline-details-item">
                  2014: Lorem ipsum dolar sit amet
                </li>
              </ul>

            </section>

          </div>

        </div>

      </div>

    </section>

  </Layout>
);

export default Cv;
