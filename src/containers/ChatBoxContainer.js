import React from "react";
import MediaQuery from "react-responsive";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import * as MessagesActions from "../actions/messages";
import MessengerBox from "../components/Messenger/MessengerBox";
import SessionManager from "../helper/session";

export class ChatBoxContainer extends React.PureComponent {
  componentDidMount() {
    SessionManager.createSession();
  }

  createMessage = (content, fromUser) => {
    this.props.messageActions.createMessages(content, fromUser);
  };

  clearMessages = () => {
    this.props.messageActions.clearMessages();
  };

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
              <MessengerBox
                messages={this.props.messages}
                pendingResponseNum={this.props.pendingResponseNum}
                createMessage={this.createMessage}
                clearMessages={this.clearMessages}
                toggleSidebar={this.props.toggleSidebar}
              />
            </div>
          );
        }}
      </MediaQuery>
    );
  }
}

ChatBoxContainer.propTypes = {
  messageActions: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  pendingResponseNum: PropTypes.number.isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    messages: state.messages,
    pendingResponseNum: state.pendingResponseNum
  };
}

function mapDispatchToProps(dispatch) {
  return {
    messageActions: bindActionCreators(MessagesActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatBoxContainer);

const styles = {
  containerRight: {
    display: "flex",
    flex: "1 0 50%"
  }
};
