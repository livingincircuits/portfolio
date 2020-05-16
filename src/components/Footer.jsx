import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ children }) => {
  return (
    <footer className="footer">

      <div className="page-inner">

        <p>
           <img src="/cute-cat.gif" alt="Cat" width="30" /> Crafted by Emily Young
        </p>

        <p>
          <a href="https://github.com/livingincircuits/portfolio">Source</a> &middot; <a href="https://www.linkedin.com/in/emily-jane-young/">LinkedIn</a> &middot; <a href="https://dribbble.com/livingincircuits">Dribbble</a> &middot; <a href="mailto:ejyoung@protonmail.com?subject=Hello">Email</a>
        </p>

      </div>

    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  children: PropTypes.any,
};

Footer.defaultProps = {
  children: false,
};
