import React from "react";
import MessengerHeader from "./MessengerHeader";
import MessengerBody from "./MessengerBody";
import MessengerFooter from "./MessengerFooter";

export default class MessengerBox extends React.PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <MessengerHeader />
        <MessengerBody />
        <MessengerFooter />
      </div>
    );
  }
}

const styles = {
  container: {
    width: 500,
    margin: "auto",
    maxWidth: "100%"
  }
};
