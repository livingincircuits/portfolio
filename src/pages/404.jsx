 /* eslint max-len: 0 */

import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { Layout } from 'elements';
import config from '../../config/website';

const ErrorPage = () => (

  <Layout>

    <Helmet
      title={`404 | ${config.siteTitle}`}
      bodyAttributes={{
        class: 'error-page'
      }}
    />

    <audio controls autoPlay loop>
      <source src="https://ia801308.us.archive.org/0/items/NyanCatoriginal/Nyan%20Cat%20%5boriginal%5d.ogg" type="audio/ogg" />
      <source src="https://ia801308.us.archive.org/0/items/NyanCatoriginal/Nyan%20Cat%20[original].mp3" type="audio/mpeg" />
    </audio>

    <div className="align-central">

      <h1>404</h1>

      <h2>The page you were looking for could not be found. It is likely I broke something.</h2>

      <p>Sorry about that.</p>

      <img src="../nyan.gif" width="80%" alt="Nyan Cat" className="align-central" />

      <a href="/">Go back to the homepage</a>

    </div>

  </Layout>

);

export default ErrorPage;
