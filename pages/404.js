import React, { Component, PropTypes } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import 'assets/css/normalize.css';
import 'assets/css/global.css';
import 'assets/css/typography.css';
import styles from './styles.module.css';
import imgSrc from 'assets/img/nyan.gif';

class FourOFour extends React.Component {

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

          <p>The page you were looking for could not be found. It's likely I broke something. Sorry about that.</p>

          <img src={imgSrc} width="80%" alt="Nyan Cat" className="align-central" />

          <a href="/">Go back to the homepage</a>

        </div>

      </div>
    )
  }
}

export default FourOFour
