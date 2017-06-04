import React, { Component } from 'react';
import { prefixLink } from 'gatsby-helpers';
import { IndexLink } from 'react-router';
import { Link } from 'react-router';
import Menu from 'components/menu';
import { Sticky } from 'components/sticky';
import imgSrc from './img/me.jpg';
import styles from './styles.module.css';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu(isVisible) {
    this.setState({ menuActive: typeof isVisible === 'undefined' ? !this.state.menuActive : isVisible });
  }

  render() {

    const { menuActive } = this.state;

    return (

      <Sticky className={styles.header}>

        <div className="page-inner">
          <div className={styles.inner}>
            <IndexLink to={prefixLink('/')} className={styles.link}>
              <img src={imgSrc} alt="Emily Young" className={styles.round} width="60" height="60" />
            </IndexLink>
            <nav className={styles.nav}>
              <Menu />
            </nav>
          </div>
        </div>

      </Sticky>

    );

  }

}
