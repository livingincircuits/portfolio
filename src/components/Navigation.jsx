/* eslint no-unused-expressions: 0 */

import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => (

  <header className="header">

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
            {/*<Link to="/blog" activeClassName="active">Writing</Link>*/}
          </li>
        </ul>
      </nav>

  </header>

);

export default Navigation;
