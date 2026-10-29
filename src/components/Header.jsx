import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children, title }) => (

  <div className="headline">

    <h1 className=""  data-text={title}>

      <span>
        {title}
      </span>

    </h1>

  </div>

);

export default Header;

Header.propTypes = {
  children: PropTypes.any,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

Header.defaultProps = {
  children: false,
};
