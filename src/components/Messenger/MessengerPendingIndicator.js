import React from "react";

export default class MessengerPendingIndicator extends React.PureComponent {
  render() {
    return (
      <li style={styles.container}>
        <div className="typing-indicator" style={styles.typingIndicator}>
          <span style={styles.typingIndicatorSpan} />
          <span style={styles.typingIndicatorSpan} />
          <span style={styles.typingIndicatorSpan} />
        </div>
      </li>
    );
  }
}

const styles = {
  container: {
    borderRadius: 12,
    padding: 0.8 + "rem",
    marginTop: 1 + "rem",
    display: "inline-block",
    opacity: 0,
    maxWidth: "80%",
    WebkitAnimation: "pop 0.5s cubic-bezier(0.36, -0.04, 0.15, 1.64) forwards",
    animations: "pop 0.5s cubic-bezier(0.36, -0.04, 0.15, 1.64) forwards",
    willChange: "transform",
    marginRight: "auto",
    WebkitTransformOrigin: "top left",
    transformOrigin: "top left",
    backgroundColor: "#456990",
    color: "#F1FCEF"
  },
  typingIndicator: {
    willChange: "transform",
    width: "auto",
    display: "table",
    margin: "0 auto",
    position: "relative",
    WebkitAnimation: "2s bulge infinite ease-out",
    animations: "2s bulge infinite ease-out"
  },
  typingIndicatorSpan: {
    height: 10,
    width: 10,
    float: "left",
    margin: "0 4px",
    backgroundColor: "#9E9EA1",
    display: "block",
    borderRadius: "50%",
    opacity: 0.4
  }
};
