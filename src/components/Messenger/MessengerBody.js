import React from "react";
import MatchQuery from 'react-responsive'

import MessengerRow from "./MessengerRow";

export default class MessengerBody extends React.PureComponent {
  render() {
    return (
      <MatchQuery minWidth={1000}>
        {match => {
          return (
            <div style={styles.container} className={"messenger-body"}>
              <div style={{...styles.messagesContainer, maxHeight: (match ? 30 : 20) + 'rem' }}>
                <ul style={styles.messagesList}>
                  <MessengerRow fromUser={false}/>
                  <MessengerRow fromUser={true}/>
                  <MessengerRow fromUser={true}/>
                  <MessengerRow fromUser={true}/>
                  <MessengerRow fromUser={true}/>
                  <MessengerRow fromUser={true}/>
                </ul>
              </div>
            </div>
          )
        }}
      </MatchQuery>
    );
  }
}

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
  },
};
