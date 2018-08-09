import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import ReactMarkdown from "react-markdown";
import MessengerPayload from "./MessengerPayload";

export default class MessengerRow extends React.PureComponent {
  render() {
    const styleModifierBySource = this.props.fromUser
      ? styles.fromUserContainerModifier
      : styles.fromRobotContainerModifier;

    return (
      <MediaQuery minWidth={1000}>
        {match => {
          const styleModifierByPayload =
            !match && this.props.payload ? { maxWidth: undefined } : null;
          return (
            <li
              style={{
                ...styles.container,
                ...styleModifierBySource,
                ...styleModifierByPayload
              }}
            >
              <div style={styles.time}>
                {moment(this.props.timestamp).format("h:mm:ss A")}
              </div>
              <div style={styles.content}>
                <ReactMarkdown
                  source={this.props.content}
                  renderers={{
                    link: props => (
                      <a
                        href={props.href}
                        target="_blank"
                        style={{
                          textDecoration: "none"
                        }}
                      >
                        {props.children[0] === "⬇️" ? (
                          <i
                            style={{
                              color: "white"
                            }}
                            className="fas fa-download"
                          />
                        ) : (
                          props.children
                        )}
                      </a>
                    ),
                    paragraph: props => (
                      <p style={{ margin: 0 }}>{props.children}</p>
                    ),
                    blockquote: props => (
                      <blockquote
                        style={{ margin: 0, marginTop: 10, marginBottom: 10 }}
                      >
                        {props.children}
                      </blockquote>
                    )
                  }}
                />
                {this.props.payload ? (
                  <MessengerPayload
                    reRenderHandler={this.props.reRenderHandler}
                    payload={this.props.payload}
                  />
                ) : null}
              </div>
            </li>
          );
        }}
      </MediaQuery>
    );
  }
}

MessengerRow.propTypes = {
  fromUser: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  payload: PropTypes.object,
  reRenderHandler: PropTypes.func
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
    marginTop: 0.5 + "rem",
    display: "flex",
    flexDirection: "column"
  }
};
