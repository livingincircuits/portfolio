/* eslint no-unused-expressions: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { SEO } from 'elements';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/normalize.css';
import '../styles/global.css';
import '../styles/typography.css';
import '../styles/elements.css';
import '../styles/animations.css';

const Layout = ({ children }) => (
  <div>

    <React.Fragment>

      <SEO />

      <div className="page-body">

        <Navigation />

        <main className="page">
          {children}
        </main>

        <Footer />

      </div>

    </React.Fragment>

  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
