import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Meta from 'components/meta';
import { Link } from 'react-router';
import { IndexLink } from 'react-router';
import styles from './styles.module.css';
import gifSrc from 'assets/img/404.gif';

const FourOhFour = () => (

  <div>

    <Meta title="404" description="Page not found." noIndex />

    <h1>
      What are you doing here?
    </h1>

    <p>
      <IndexLink to={prefixLink('/')} className={styles.link}>
        Go Home
      </IndexLink>
    </p>

    <img src={gifSrc} alt="Nyan Cat" />

  </div>

);

export default FourOhFour;
