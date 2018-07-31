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
                ...styles.container,
                padding: match ? "0 1rem" : "1rem 0"
              }}
            >
              <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
                integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
                crossOrigin="anonymous"
              />
              <div style={styles.titleContainer}>
                <h1 style={{
                  paddingRight: 20,
                  color: '#F1FCEF'
                }}>Hi, I'm Zheng</h1>
              </div>
              <div style={styles.titleContainer}>
                <div style={styles.scrollTextContainer}>
                  <p style={styles.staticText}>I am a</p>
                  <ul style={styles.scrollTextList}>
                    <li style={styles.scrollTextItem}>coder</li>
                    <li style={styles.scrollTextItem}>gamer</li>
                    <li style={styles.scrollTextItem}>fan</li>
                  </ul>
                </div>
                <div style={styles.scrollImageContainer}>
                  <p style={{ ...styles.staticText, lineHeight: 60 + "px" }}>
                    of
                  </p>
                  <ul style={styles.scrollImageList}>
                    <li style={styles.scrollImageItem}>
                      <i
                        style={styles.scrollImageItemIcon}
                        className="fab fa-js-square"
                      />
                      <i
                        style={styles.scrollImageItemIcon}
                        className="fab fa-python"
                      />
                    </li>
                    <li style={styles.scrollImageItem}>
                      <i
                        style={styles.scrollImageItemIcon}
                        className="fab fa-nintendo-switch"
                      />
                      <i
                        style={styles.scrollImageItemIcon}
                        className="fab fa-steam"
                      />
                    </li>
                    <li style={styles.scrollImageItem}>
                      <i
                        style={styles.scrollImageItemIcon}
                        className="fas fa-swimmer"
                      />
                      <i
                        style={styles.scrollImageItemIcon}
                        className="fas fa-film"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        }}
      </MediaQuery>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flex: "1 0 50%",
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: "row"
  },
  scrollTextContainer: {
    height: 40,
    overflow: "hidden",
    margin: "auto",
    marginRight: 0,
    display: "block"
  },
  scrollImageContainer: {
    height: 60,
    overflow: "hidden",
    margin: "auto",
    marginRight: 0,
    display: "block",
    marginLeft: 15
  },
  staticText: {
    float: "left",
    display: "inline",
    color: "#F1FCEF",
    fontSize: 35,
    height: 40,
    margin: 0,
    marginLeft: 0
  },
  scrollTextList: {
    marginTop: 0,
    paddingLeft: 120,
    listStyle: "none",
    WebkitAnimationName: "change",
    WebkitAnimationDuration: "10s",
    WebkitAnimationIterationCount: "infinite",
    animationName: "change",
    animationDuration: "10s",
    animationIterationCount: "infinite"
  },
  scrollImageList: {
    marginTop: 0,
    listStyle: "none",
    WebkitAnimationName: "change",
    WebkitAnimationDuration: "10s",
    WebkitAnimationIterationCount: "infinite",
    animationName: "change",
    animationDuration: "10s",
    animationIterationCount: "infinite",
    paddingLeft: 50
  },
  scrollImageItem: {
    textAlign: "left",
    color: "#F1FCEF",
    fontSize: 60,
    height: 60
  },
  scrollTextItem: {
    textAlign: "left",
    color: "#F1FCEF",
    fontSize: 35,
    height: 40
  },
  scrollImageItemIcon: {
    marginRight: 15
  }
};
