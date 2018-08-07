import React from "react";

import logData from "../../static/log";

export default class LogSidebarComponent extends React.PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.sidebarHeaderTitle}>{logData.title}</h1>
        <ul style={styles.sidebarList}>
          {logData.instructions.map((ins, index) => {
            return (
              <li style={styles.sidebarListItem} key={index}>
                <h1 style={styles.sidebarListTitle}>{ins.title}</h1>
                <ul style={styles.messagesList}>
                  {ins.messages.map((msg, _index) => {
                    return (
                      <li key={_index} style={styles.messagesListItem}>
                        <h2 style={styles.messageListItemTitle}>{msg}</h2>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
        <h1 style={styles.sidebarFooterTitle}>
          -
          <span role="img" aria-label="robot">
            🤖
          </span>
          -
        </h1>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "white",
    fontFamily: "Inconsolata",
    minHeight: "100%",
    paddingTop: 1 + "rem",
    paddingBottom: 1 + "rem"
  },
  sidebarHeaderTitle: {
    fontSize: 1.5 + "rem",
    marginTop: 0,
    textAlign: "center"
  },
  sidebarFooterTitle: {
    fontSize: 1.5 + "rem",
    textAlign: "center",
    marginTop: 4 + "rem"
  },
  sidebarList: {
    margin: 0,
    maxWidth: "90%"
  },
  sidebarListTitle: {
    fontSize: 1.3 + "rem"
  },
  sidebarListItem: {
    marginBottom: 1 + "rem"
  },
  messagesList: {
    paddingLeft: 1 + "rem"
  },
  messagesListItem: {},
  messageListItemTitle: {
    fontSize: 1 + "rem"
  }
};
