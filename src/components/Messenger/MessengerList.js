import React from "react";
import MatchQuery from "react-responsive";
import PropTypes from "prop-types";

import MessengerRow from "./MessengerRow";
import MessengerPendingIndicator from "./MessengerPendingIndicator";

export default class MessengerList extends React.PureComponent {
  constructor() {
    super();
    this.lastListItem = React.createRef();
  }

  componentDidUpdate() {
    if (this.lastListItem) {
      this.lastListItem.scrollIntoView({ behavior: "smooth" });
    }
  }

  render() {
    return (
      <MatchQuery minWidth={1000}>
        {match => {
          return (
            <div style={styles.container} className={"messenger-body"}>
              <div
                style={{
                  ...styles.messagesContainer,
                  height: (match ? 30 : 20) + "rem"
                }}
              >
                <ul style={styles.messagesList}>
                  {this.props.messages.map(message => {
                    return (
                      <MessengerRow
                        key={message.id}
                        timestamp={message.timestamp}
                        content={message.content}
                        fromUser={message.fromUser}
                        payload={message.payload}
                      />
                    );
                  })}
                  {this.props.pendingResponseNum ? (
                    <MessengerPendingIndicator />
                  ) : null}
                  <div
                    style={{ float: "left", clear: "both" }}
                    ref={el => {
                      this.lastListItem = el;
                    }}
                  />
                </ul>
              </div>
            </div>
          );
        }}
      </MatchQuery>
    );
  }
}

MessengerList.propsType = {
  messages: PropTypes.array.isRequired,
  pendingResponseNum: PropTypes.number.isRequired
};

const styles = {
  container: {
    borderTop: "4px solid #F1FCEF",
    padding: 0,
    position: "relative",
    WebkitAnimation:
      "up 0.3s cubric-bezier(0.36, -0.04, 0.15, 1.64) 0.1s forwards",
    animation: "up 0.3s cubric-bezier(0.36, -0.04, 0.15, 1.64) 0.1s forwards"
  },
  messagesContainer: {
    overflow: "auto"
  },
  messagesList: {
    margin: 0,
    padding: 1 + "rem",
    listStyleType: "none",
    display: "flex",
    flexDirection: "column"
  }
};
