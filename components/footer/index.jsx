import React, { Component } from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';
import styles from './styles.module.css';
import imgSrc from './img/cat.gif';

export default class Footer extends Component {

  render() {

    return (
      <footer className={styles.footer}>
        <div className="page-inner">
          <div className={styles.inner}>
            <p>
              <img src={imgSrc} alt="Dancing Cat" width="20" /> Crafted by Emily Young
            </p>
            <p>
              <a href="https://github.com/livingincircuits/portfolio">View Source Code</a> &middot; <a href="https://github.com/livingincircuits">Github</a> &middot; <a href="https://dribbble.com/livingincircuits">Dribbble</a> &middot; <a href="mailto:emily@emily-young.com?subject=Hello">Email Me</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
