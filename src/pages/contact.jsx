/* eslint max-len: 0 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { ArenguForm } from "gatsby-plugin-arengu-forms"
import { Container, Layout } from 'elements';
import Header from '../components/Header';
import config from '../../config/website';

const Contact = () => (
  <Layout>

    <Helmet title={`Contact | ${config.siteTitle}`} />

    <Header title="Contact">
      Contact
    </Header>

    <section className="page-inner content">

        <div className="page-content">
          <div>
            <ArenguForm id="156905712747087141" />
          </div>
        </div>

    </section>

  </Layout>
);

export default Contact;
