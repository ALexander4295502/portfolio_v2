import React from "react";

export default class MessengerRow extends React.PureComponent {
  render() {
    return (
      <li style={styles.container}>
        <div style={styles.time}>1:30pm</div>
        <div style={styles.content}>Hey I'm your text door neighbor</div>
      </li>
    );
  }
}

const styles = {
  container: {
    marginLeft: "auto",
    borderRadius: 12,
    padding: 1 + "rem",
    marginTop: 1 + "rem",
    display: "inline-block",
    backgroundColor: "#456990",
    color: "#F1FCEF",
    opacity: 0,
    maxWidth: "80%",
    WebkitAnimation: 'pop 0.5s cubic-bezier(0.36, -0.04, 0.15, 1.64) forwards',
    animations: 'pop 0.5s cubic-bezier(0.36, -0.04, 0.15, 1.64) forwards',
    willChange: 'transform',
    WebkitTransformOrigin: 'top right',
    transformOrigin: 'top right',
  },
  time: {
    fontSize: 0.65 + "rem"
  },
  content: {
    fontSize: 0.85 + "rem",
    marginTop: 1 + "rem"
  }
};
