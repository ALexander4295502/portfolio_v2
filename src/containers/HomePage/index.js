import React from 'react';
import { keyframes } from 'styled-components';

import logo from '../../logo.svg';

export default class HomePage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      messages: []
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div style={styles.App}>
        <header style={styles.AppHeader}>
          <img src={logo} style={styles.AppLogo} alt={"logo"}/>
          <h1 style={styles.AppTitle}>Welcome to React</h1>
        </header>
        <p style={styles.AppIntro}>To get started, edit
          <code>src/container/HomePage/index.js</code>
          and save to reload</p>
      </div>
    )
  }

}

const AppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const styles = {
  App: {
    textAlign: 'center',
  },
  AppLogo: {
    height: 80,
    animation: `${AppLogoSpin} infinite 20s linear`,
  },
  AppHeader: {
    backgroundColor: '#222',
    height: 150,
    padding: 20,
    color: 'white'
  },
  AppTitle: {
    fontSize: 1.5 + 'em',
  },
  AppIntro: {
    fontSize: 'large',
  },
};