import React from "react";

export default class MessengerFooter extends React.PureComponent {
  render() {
    return (
      <div style={styles.container} className={"messenger-footer"}>
        <input placeholder={"Enter text here"} style={styles.input} className={"messenger-input"} />
        <button style={styles.submit} className={"messenger-submit"} />
      </div>
    );
  }
}

const styles = {
  container: {
    height: 6 + "rem",
    border: "4px solid #114B5F",
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
    backgroundColor: "rgba(241, 252, 239, 0.3)",
    marginTop: 4,
    border: 0,
    borderRadius: "0 0 12px 12px",
    padding: "1rem 5rem 1rem 1rem",
    color: "#114B5F",
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
    boxShadow: "4px 4px #6B2737"
  }
};
