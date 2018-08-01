import React from "react";
import PropTypes from "prop-types";

import MessengerHeader from "./MessengerHeader";
import MessengerList from "./MessengerList";
import MessengerFooter from "./MessengerFooter";

export default class MessengerBox extends React.PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <MessengerHeader clearMessages={this.props.clearMessages} />
        <MessengerList
          messages={this.props.messages}
          pendingResponseNum={this.props.pendingResponseNum}
        />
        <MessengerFooter createMessage={this.props.createMessage} />
      </div>
    );
  }
}

MessengerBox.propsType = {
  messages: PropTypes.array.isRequired,
  createMessage: PropTypes.func.isRequired,
  clearMessages: PropTypes.func.isRequired,
  pendingResponseNum: PropTypes.number.isRequired
};

const styles = {
  container: {
    width: 500,
    margin: "auto",
    maxWidth: "100%"
  }
};
