import React from "react";
import PropTypes from "prop-types";

export default class MessengerFooter extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  keyPressHandler = e => {
    if (e.which === 13) {
      this.submitHandler();
    }
  };

  handleInput = e => {
    this.setState({
      value: e.target.value
    });
  };

  submitHandler = () => {
    if (this.state.value) {
      this.props.createMessage(this.state.value, true);
      this.setState({
        value: ""
      });
    }
  };

  render() {
    return (
      <div style={styles.container} className={"messenger-footer"}>
        <input
          placeholder={"Enter text here"}
          style={styles.input}
          className={"messenger-input"}
          value={this.state.value}
          onChange={this.handleInput}
          onKeyPress={this.keyPressHandler}
        />
        <button
          style={styles.submit}
          className={"messenger-submit"}
          onClick={this.submitHandler}
        />
      </div>
    );
  }
}

MessengerFooter.propsType = {
  createMessage: PropTypes.func.isRequired
};

const styles = {
  container: {
    height: 6 + "rem",
    border: "4px solid #F1FCEF",
    borderTop: 0,
    opacity: 0,
    borderRadius: "0 0 12px 12px",
    position: "relative",
    overflow: "hidden",
    WebkitAnimation:
      "up 0.3s cubic-bezier(0.36, -0.04, 0.15, 1.64) 0.4s forwards",
    animation: "up 0.3s cubic-bezier(0.36, -0.04, 0.15, 1.64) 0.4s forwards"
  },
  input: {
    width: "100%",
    height: "100%",
    resize: "none",
    backgroundColor: "transparent",
    marginTop: 4,
    border: 0,
    borderRadius: "0 0 12px 12px",
    padding: "1rem 5rem 1rem 1rem",
    color: "#F1FCEF",
    fontSize: 20
  },
  submit: {
    width: 3 + "rem",
    height: 3 + "rem",
    border: 0,
    borderRadius: 4,
    backgroundColor: "#F45B69",
    position: "absolute",
    right: "1rem",
    top: "calc(50% - 1.5rem)",
    boxShadow: "4px 4px #6B2737",
    cursor: "pointer"
  }
};
