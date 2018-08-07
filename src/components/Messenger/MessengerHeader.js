import React from "react";
import PropTypes from "prop-types";

export default class MessengerHeader extends React.PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <i
          style={styles.buttonIcon}
          onClick={this.props.clearMessages}
          className="far fa-trash-alt"
        />
        <i
          style={styles.buttonIcon}
          onClick={this.props.toggleSidebar}
          className="far fa-question-circle"
        />
      </div>
    );
  }
}

MessengerHeader.propsType = {
  clearMessages: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

const styles = {
  container: {
    height: 3 + "rem",
    padding: "0 1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    border: "4px solid #F1FCEF",
    borderBottom: 0,
    borderRadius: "12px 12px 0 0",
    WebkitAnimation: "down 0.3s cubic-bezier(0.36, -0.04, 0.15, 1.64) forwards",
    animation: "down 0.3s cubic-bezier(0.36, -0.04, 0.15, 1.64) forwards"
  },
  buttonIcon: {
    color: "#F1FCEF",
    WebkitAnimation: "down 0.3s cubic-bezier(0.36, -0.04, 0.15, 1.64) forwards",
    animation: "down 0.3s cubic-bezier(0.36, -0.04, 0.15, 1.64) forwards",
    cursor: "pointer",
    marginLeft: 1 + "rem"
  }
};
