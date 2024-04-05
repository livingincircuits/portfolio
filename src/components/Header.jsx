import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children, title }) => (

    <h1 className="glitch"  data-text={title}>

      <span>
        {title}
      </span>

    </h1>
);

export default Header;

Header.propTypes = {
  children: PropTypes.any,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

Header.defaultProps = {
  children: false,
};
