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

          <h1 className={styles.pinline}>
            <span>
              Emily Young
            </span>
          </h1>

          <p>
            A UX Designer who loves to create clean, simple & inclusive experiences for everyone.
            I enjoy creating something simple from a complex problem and love creating human experiences on the web.
          </p>

          <p>
            I share my thoughts, process and what I learn via this website.
          </p>

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
