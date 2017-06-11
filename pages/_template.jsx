import React, { Component, PropTypes } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import 'assets/css/normalize.css';
import 'assets/css/global.css';
import 'assets/css/typography.css';
import styles from './styles.module.css';

export default class Template extends Component {

  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
  }

  static childContextTypes = {
    location: React.PropTypes.object,
  }

  getChildContext() {
    return {
      location: this.props.location,
    };
  }

  render() {

    return (

      <div className="page-body">

        <Header />

        <main className="page">
          {this.props.children}
        </main>

        <Footer />

      </div>

    );

  }

}
