import React from "react";
import MessengerRow from "./MessengerRow";

export default class MessengerBody extends React.PureComponent {
  render() {
    return (
      <div style={styles.container} className={"messenger-body"}>
        <div style={styles.messagesContainer}>
          <ul style={styles.messagesList}>
            <MessengerRow />
            <MessengerRow />
            <MessengerRow />
            <MessengerRow />
            <MessengerRow />
            <MessengerRow />
          </ul>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    borderTop: "4px solid #114B5F",
    padding: 0,
    position: "relative",
    WebkitAnimation:
      "up 0.3s cubric-bezier(0.36, -0.04, 0.15, 1.64) 0.1s forwards",
    animation: "up 0.3s cubric-bezier(0.36, -0.04, 0.15, 1.64) 0.1s forwards"
  },
  messagesContainer: {
    maxHeight: 20 + "rem",
    overflow: "auto"
  },
  messagesList: {
    margin: 0,
    padding: 1 + "rem",
    listStyleType: "none",
    display: "flex",
    flexDirection: "column"
  },
};
