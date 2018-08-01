import React from "react";
import MediaQuery from "react-responsive";

export default class IntroContainer extends React.PureComponent {
  render() {
    const roleNames = ["coder", "gamer", "fan"];

    const iconNames = [
      ["fab fa-js-square", "fab fa-python"],
      ["fab fa-steam", "fab fa-nintendo-switch"],
      ["fas fa-swimmer", "fas fa-film"]
    ];

    return (
      <MediaQuery minWidth={1000}>
        {match => {
          return (
            <div
              style={{
                ...styles.container,
                padding: match ? "0 1rem" : "1rem 0",
                alignItems: match ? "flex-end" : "center"
              }}
            >
              <div style={styles.titleContainer}>
                <h1
                  style={{
                    paddingRight: match ? 20 : 0,
                    color: "#F1FCEF",
                    fontSize: match ? 35 : 17,
                    height: match ? 40 : 20
                  }}
                >
                  Hi, I'm Zheng
                </h1>
              </div>
              <div style={styles.titleContainer}>
                <div
                  style={{
                    ...styles.scrollTextContainer,
                    height: match ? 40 : 20,
                    textAlign: match ? undefined : "center"
                  }}
                >
                  <p
                    style={{
                      ...styles.staticText,
                      fontSize: match ? 35 : 17,
                      height: match ? 40 : 20
                    }}
                  >
                    I am a
                  </p>
                  <ul
                    style={{
                      ...styles.scrollTextList,
                      paddingLeft: match ? 120 : 60
                    }}
                  >
                    {roleNames.map((roleName, id) => {
                      return (
                        <li
                          key={id}
                          style={{
                            ...styles.scrollTextItem,
                            fontSize: match ? 35 : 17,
                            height: match ? 40 : 20
                          }}
                        >
                          {roleName}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div
                  style={{
                    ...styles.scrollImageContainer,
                    height: match ? 60 : 30,
                    marginLeft: match ? 15 : 7
                  }}
                >
                  <p
                    style={{
                      ...styles.staticText,
                      lineHeight: (match ? 60 : 30) + "px",
                      fontSize: match ? 35 : 17,
                      height: match ? 40 : 20
                    }}
                  >
                    of
                  </p>
                  <ul
                    style={{
                      ...styles.scrollImageList,
                      paddingLeft: match ? 50 : 30
                    }}
                  >
                    {iconNames.map((iconName, id) => {
                      return (
                        <li
                          key={id}
                          style={{
                            ...styles.scrollImageItem,
                            fontSize: match ? 60 : 30,
                            height: match ? 60 : 30
                          }}
                        >
                          <i
                            style={styles.scrollImageItemIcon}
                            className={iconName[0]}
                          />
                          <i
                            style={styles.scrollImageItemIcon}
                            className={iconName[1]}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div style={styles.titleContainer}>
                <h1
                  style={{
                    paddingRight: match ? 20 : 0,
                    color: "#F1FCEF",
                    fontSize: match ? 35 : 17,
                    height: match ? 40 : 20,
                    textAlign: match ? "right" : "center"
                  }}
                >
                  Have questions? I'm happy to help{" "}
                  <span role={"img"} aria-label={"hand"}>
                    {match ? "👉" : "👇"}
                  </span>
                </h1>
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
    flexDirection: "column",
    justifyContent: "center"
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row"
  },
  scrollTextContainer: {
    overflow: "hidden",
    margin: "auto",
    marginRight: 0,
    display: "block"
  },
  scrollImageContainer: {
    overflow: "hidden",
    margin: "auto",
    marginRight: 0,
    display: "block"
  },
  staticText: {
    float: "left",
    display: "inline",
    color: "#F1FCEF",
    margin: 0,
    marginLeft: 0
  },
  scrollTextList: {
    marginTop: 0,
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
    animationIterationCount: "infinite"
  },
  scrollImageItem: {
    textAlign: "left",
    color: "#F1FCEF"
  },
  scrollTextItem: {
    textAlign: "left",
    color: "#F1FCEF"
  },
  scrollImageItemIcon: {
    marginRight: 15
  }
};
