import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

export default class MessengerRow extends React.PureComponent {
  render() {
    const styleModifier = this.props.fromUser
      ? styles.fromUserContainerModifier
      : styles.fromRobotContainerModifier;

    return (
      <li style={{ ...styles.container, ...styleModifier }}>
        <div style={styles.time}>
          {moment(this.props.timestamp).format("h:mm:ss a")}
        </div>
        <div style={styles.content}>{this.props.content}</div>
      </li>
    );
  }
}

MessengerRow.propTypes = {
  fromUser: PropTypes.bool,
  content: PropTypes.string,
  timestamp: PropTypes.string
};

const styles = {
  container: {
    borderRadius: 12,
    padding: 1 + "rem",
    marginTop: 1 + "rem",
    display: "inline-block",
    opacity: 0,
    maxWidth: "80%",
    WebkitAnimation: "pop 0.5s cubic-bezier(0.36, -0.04, 0.15, 1.64) forwards",
    animations: "pop 0.5s cubic-bezier(0.36, -0.04, 0.15, 1.64) forwards",
    willChange: "transform"
  },
  fromUserContainerModifier: {
    marginLeft: "auto",
    WebkitTransformOrigin: "top right",
    transformOrigin: "top right",
    backgroundColor: "#FFF",
    color: "#000"
  },
  fromRobotContainerModifier: {
    marginRight: "auto",
    WebkitTransformOrigin: "top left",
    transformOrigin: "top left",
    backgroundColor: "#456990",
    color: "#F1FCEF"
  },
  time: {
    fontSize: 0.65 + "rem"
  },
  content: {
    fontSize: 0.85 + "rem",
    marginTop: 1 + "rem"
  }
};
