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

class ArticlesIndex extends React.Component {

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
            <h2 className={styles.post__title}>
              <Link to={prefixLink(page.path)}>{title}</Link>
            </h2>
          </article>
        ));

      }

    });

    return (

      <div>

        <Meta />

        <h1 className="pinline">
          <svg className="pinline__svg pinline__svg--top" width="80" height="60" viewBox="5 0 80 60">
            <path className="wave" fill="none" stroke="#FFF" strokeWidth="4" strokeLinecap="round" d="M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15" />
          </svg>
          <span>
            Writing
          </span>
          <svg className="pinline__svg pinline__svg--bottom" width="80" height="40" viewBox="5 0 80 40">
            <path className="wave" fill="none" stroke="#FFF" strokeWidth="4" strokeLinecap="round" d="M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15" />
          </svg>
        </h1>

        {pageLinks}

      </div>

    );
  }

}

ArticlesIndex.propTypes = {
  route: React.PropTypes.object,
};

export default ArticlesIndex;
