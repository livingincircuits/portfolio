import React, { Component, PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import Helmet from 'react-helmet';
import shareImage from 'assets/img/favicon/share.png';

const BUILD_TIME = new Date().getTime();
const openGraphUrl = process.env.NODE_ENV === 'production' ? `${config.siteUrl}${shareImage}` : shareImage;

export default class Html extends Component {

  static propTypes = {
    body: PropTypes.string,
  };

  render() {

    const helmet = Helmet.rewind();
    let css;

    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />;
    }

    return (

      <html lang="en">

        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          <meta property="og:site_name" content={config.siteTitle} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={openGraphUrl} />
          <link rel="icon" type="image/png" href={require('assets/img/favicon/favicon-32x32.png')} sizes="32x32" />
          <link rel="icon" type="image/png" href={require('assets/img/favicon/favicon-16x16.png')} sizes="16x16" />
          <link rel="apple-touch-icon" sizes="180x180" href={require('assets/img/favicon/apple-touch-icon.png')} />
          <meta name="google-site-verification" content="K2IZiKagWwqNsK3TK4SHJrJ5xqj3HkSSJPqH-yG_Zpg" />
          {css}
          <script>
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:946836,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          </script>
        </head>

        <body>
          <div id="react-mount" className="page-document" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>

      </html>

    );

  }

}
