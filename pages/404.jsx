import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Meta from 'components/meta';
import { Link } from 'react-router';
import styles from './styles.module.css';
import gifSrc from 'assets/img/404.gif';

const FourOhFour = () => (

  <div>

    <Meta title="404" />

    <h1>
      What are you doing here?
    </h1>

    <img src={gifSrc} alt="Nyan Cat" />

  </div>

);

export default FourOhFour;
