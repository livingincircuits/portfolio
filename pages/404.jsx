import React, { Component } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import Meta from 'components/meta';
import sortBy from 'lodash/sortBy';
import moment from 'moment';
import Helmet from 'react-helmet';
import access from 'safe-access';
import styles from './styles.module.css';
import imgSrc from 'assets/img/nyan.gif';

class NotFoundPage extends React.Component {

    componentDidMount() {
        document.body.classList.toggle('error-page')
    }
    componentWillUnmount() {
        document.body.classList.remove('error-page')
    }

  render() {

    return (

      <div>

        <audio controls autoPlay loop>
          <source src="https://ia801308.us.archive.org/0/items/NyanCatoriginal/Nyan%20Cat%20%5boriginal%5d.ogg" type="audio/ogg" />
          <source src="https://ia801308.us.archive.org/0/items/NyanCatoriginal/Nyan%20Cat%20[original].mp3" type="audio/mpeg" />
        </audio>

        <div className="align-central">

          <h1>404</h1>

          <h2>The page you were looking for could not be found. It is likely I broke something.</h2>

          <p>Sorry about that.</p>

          <img src={imgSrc} width="80%" alt="Nyan Cat" className="align-central" />

          <a href="/">Go back to the homepage</a>

        </div>

      </div>

    );

  }

}

NotFoundPage.propTypes = {
  route: React.PropTypes.object,
};

export default NotFoundPage;
