/* eslint no-unused-expressions: 0 */

import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => (

  <header className="header">

    <div className="inner">

      <a href="/" className="link">
        <img src="/me.jpg" className="round" alt="Emily Young" width="60" height="60" />
      </a>

      <nav className="nav">
        <ul>
          <li className="item">
            <Link to="/" activeClassName="active">Home</Link>
          </li>
          <li className="item">
            <Link to="/about" activeClassName="active">About</Link>
          </li>
          <li className="item">
            <Link to="/projects" activeClassName="active">Work</Link>
          </li>
          <li className="item">
            <Link to="/blog" activeClassName="active">Writing</Link>
          </li>
        </ul>
      </nav>

    </div>

  </header>

);

export default Navigation;
