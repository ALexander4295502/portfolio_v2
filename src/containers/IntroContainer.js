import React from "react";
import MediaQuery from "react-responsive";

export default class IntroContainer extends React.PureComponent {
  render() {
    return (
      <MediaQuery minWidth={1000}>
        {match => {
          return (
            <div
              style={{
                display: "flex",
                flex: "1 0 50%",
                padding: match ? "0 1rem" : "1rem 0"
              }}
            >
              <h1
                style={{
                  margin: "auto",
                  marginRight: 0,
                  fontSize: 4 + "rem",
                  letterSpacing: 2,
                  color: "#F1FCEF",
                  textShadow: "4px 2px 4px rgba(69, 105, 144, 0.2)",
                }}
              >
                JOHN{" "}
                <span role={"img"} aria-label="men">
                  👱
                </span>
                <div
                  style={{
                    fontSize: 2 + "rem"
                  }}
                >
                  The last friend <br />
                  you'll <span style={styles.titleSpan}>e</span>
                  <span style={styles.titleSpan}>v</span>
                  <span style={styles.titleSpan}>e</span>
                  <span style={styles.titleSpan}>r</span>
                  <span style={styles.titleSpan}>&nbsp;</span>
                  <span style={styles.titleSpan}>n</span>
                  <span style={styles.titleSpan}>e</span>
                  <span style={styles.titleSpan}>e</span>
                  <span style={styles.titleSpan}>d</span>
                </div>
              </h1>
            </div>
          );
        }}
      </MediaQuery>
    );
  }
}

const styles = {
  titleSpan: {
    display: "inline-block",
    opacity: 1
  }
};
