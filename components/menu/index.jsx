import React, { PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers';
import { IndexLink, Link } from 'react-router';
import styles from './styles.module.css';

const Menu = ({ active, onNavClick }) => {

  const linkProps = {
    onClick: onNavClick,
    activeClassName: styles.active,
  };

  return (
    <ul>
      <li className={styles.item}>
        <IndexLink {...linkProps} to={prefixLink('/')}>Writing</IndexLink>
      </li>
      <li className={styles.item}>
        <Link {...linkProps} to={prefixLink('/about/')}>About</Link>
      </li>
      <li className={styles.item}>
        <Link {...linkProps} to={prefixLink('/work/')}>Work</Link>
      </li>
    </ul>
  );

};

Menu.propTypes = {
  active: PropTypes.bool,
  onNavClick: PropTypes.func,
};

export default Menu;
