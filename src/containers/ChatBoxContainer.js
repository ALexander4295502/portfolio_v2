import React from "react";
import MediaQuery from "react-responsive";
import MessengerBox from "../components/Messenger/MessengerBox";

export default class ChatBoxContainer extends React.PureComponent {
  render() {
    return (
      <MediaQuery minWidth={1000}>
        {match => {
          return (
            <div
              style={{
                ...styles.containerRight,
                padding: match ? "0 1rem" : "1rem 0"
              }}
            >
              <MessengerBox />
            </div>
          );
        }}
      </MediaQuery>
    );
  }
}

const styles = {
  containerRight: {
    display: "flex",
    flex: "1 0 50%",
  }
};
