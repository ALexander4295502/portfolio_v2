import React from "react";
import MediaQuery from "react-responsive";
import ReactGA from "react-ga";

import IntroContainer from "./IntroContainer";
import { injectGoogleFonts } from "../helper/fonts";
import ChatBoxContainer from "./ChatBoxContainer";
import { injectAnimationFrames } from "../helper/animationKeyframes";
import "../static/main.css";

ReactGA.initialize("UA-123347555-1");

export default class HomePage extends React.PureComponent {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  injectHelper() {
    injectGoogleFonts();
    injectAnimationFrames();
  }

  render() {
    this.injectHelper();
    return (
      <MediaQuery minWidth={1000}>
        {match => {
          return (
            <div
              style={{
                ...styles.background,
                padding: match ? "3rem 0 4rem" : "1rem 0 4rem"
              }}
            >
              <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
                integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
                crossOrigin="anonymous"
              />
              <div
                style={{
                  ...styles.container,
                  flexDirection: match ? "row" : "column"
                }}
              >
                <IntroContainer />
                <ChatBoxContainer />
              </div>
            </div>
          );
        }}
      </MediaQuery>
    );
  }
}

const styles = {
  background: {
    display: "flex",
    minHeight: 100 + "vh",
    position: "relative",
    background:
      "radial-gradient( circle farthest-corner at 10% 20%, rgba(69,86,102,1) 0%, rgba(34,34,34,1) 90% )",
    backgroundSize: "400% 400%",
    WebkitAnimation: "Gradient 15s ease infinite",
    MozAnimation: "Gradient 15s ease infinite",
    animation: "Gradient 15s ease infinite"
  },
  container: {
    width: "100%",
    maxWidth: 1200,
    padding: 1 + "rem",
    margin: "auto",
    display: "flex",
    fontFamily: "Inconsolata"
  }
};
