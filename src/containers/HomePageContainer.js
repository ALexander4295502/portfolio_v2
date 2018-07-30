import React from "react";
import MediaQuery from "react-responsive";

import IntroContainer from "./IntroContainer";
import { injectGoogleFonts } from "../helper/fonts";
import ChatBoxContainer from "./ChatBoxContainer";
import { injectAnimationFrames } from "../helper/animationKeyframes";
import { cssPolyfiller } from "../helper/cssPolyfillHelper";

export default class HomePage extends React.PureComponent {
  injectHelper() {
    injectGoogleFonts();
    injectAnimationFrames();
    cssPolyfiller();
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
      "linear-gradient(45deg, #43C6AC, #F8FFAE) center/cover no-repeat"
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
