import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import Meta from 'components/meta';
import sortBy from 'lodash/sortBy';
import moment from 'moment';
import Helmet from 'react-helmet';
import access from 'safe-access';
import styles from './styles.module.css';
import img3m from 'assets/img/logos/3m-logo.svg';
import imgBentley from 'assets/img/logos/bentley-logo.svg';
import imgNHS from 'assets/img/logos/nhs-logo.svg';
import imgUOE from 'assets/img/logos/uoe-logo.svg';
import imgUOS from 'assets/img/logos/uos-logo.svg';
import imgUOM from 'assets/img/logos/uom-logo.svg';
import imgTopman from 'assets/img/logos/topman-logo.svg';

class SiteIndex extends React.Component {

  render() {

    return (

      <div>

        <Meta />

        <h1 className="pinline">
          <svg className="pinline__svg pinline__svg--top" width="80" height="60" viewBox="5 0 80 60">
            <path className="wave" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" d="M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15" />
          </svg>
          <span>
            Emily Young
          </span>
          <svg className="pinline__svg pinline__svg--bottom" width="80" height="40" viewBox="5 0 80 40">
            <path className="wave" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" d="M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15" />
          </svg>
        </h1>

        <div className={styles.intro}>
          <p>
            A UX Designer who loves to create clean, simple & inclusive experiences for everyone.
            I enjoy creating something simple from a complex problem and love creating human experiences on the web.
          </p>

          <p>
            I share my thoughts, process and what I learn via this website.
          </p>

          <p>
            I have worked with some amazing brands over the years. My favourites include:
          </p>

          <ul className="logo-list">
            <li className="logo-list__item">
              <img src={img3m} alt="3m" />
            </li>
            <li className="logo-list__item">
              <img src={imgBentley} alt="Bentley" />
            </li>
            <li className="logo-list__item">
              <img src={imgNHS} alt="NHS" />
            </li>
            <li className="logo-list__item">
              <img src={imgUOE} alt="University of Essex" />
            </li>
            <li className="logo-list__item">
              <img src={imgUOM} alt="University of Manchester" />
            </li>
            <li className="logo-list__item">
              <img src={imgUOS} alt="University of Sheffield" />
            </li>
            <li className="logo-list__item">
              <img src={imgTopman} alt="Topman" />
            </li>
          </ul>

        </div>

      </div>

    );
  }

}

SiteIndex.propTypes = {
  route: React.PropTypes.object,
};

export default SiteIndex;
