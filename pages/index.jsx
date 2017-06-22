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

class SiteIndex extends React.Component {

  render() {
    const pageLinks = [];

    const sortedPages = sortBy(this.props.route.pages, page => access(page, 'data.date')).reverse();
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post') {
        const title = access(page, 'data.title') || page.path;
        const description = access(page, 'data.description');
        const datePublished = access(page, 'data.date');
        const category = access(page, 'data.category');

        pageLinks.push((
          <article className={styles.post} key={title}>
            <h3 className={styles.post__title}>
              <Link to={prefixLink(page.path)}>{title}</Link>
            </h3>
          </article>
        ));
      }
    });

    return (

      <div>

        <Meta />

        <div className={styles.intro}>

          <h1 className={styles.intro__title}>
            Emily Young
          </h1>

          <h2>

            <span className={styles.intro__sub}>
              I love to create
            </span>

            <span className={styles.intro__desc}>
              clean, simple & inclusive experiences.
            </span>

          </h2>

        </div>

        {pageLinks}

      </div>

    );
  }

}

SiteIndex.propTypes = {
  route: React.PropTypes.object,
};

export default SiteIndex;
