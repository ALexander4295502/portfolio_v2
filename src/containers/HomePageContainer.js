import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactGA from "react-ga";

import "../static/css/main.css";

import IntroContainer from "./IntroContainer";
import ChatBoxContainer from "./ChatBoxContainer";
import SidebarContainer from "./SidebarContainer";
import LogSidebarComponent from "../components/LogSidebar/LogSidebarComponent";
import * as SidebarActions from "../actions/sidebar";

ReactGA.initialize("UA-123347555-1");

class HomePage extends React.PureComponent {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  toggleSidebar = () => {
    this.props.sidebarActions.toggleSidebar();
  };

  render() {
    return (
      <MediaQuery minWidth={1000}>
        {match => {
          return (
            <SidebarContainer
              styles={{
                sidebar: {
                  maxWidth: match ? "60%" : "75%"
                }
              }}
              sidebar={<LogSidebarComponent />}
              open={this.props.sidebarOpen}
              onSetOpen={this.toggleSidebar}
            >
              <div
                style={{
                  ...styles.background,
                  padding: match ? "3rem 0 4rem" : "1rem 0 4rem"
                }}
              >
                <link
                  rel="stylesheet"
                  href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
                  integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
                  crossOrigin="anonymous"
                />
                <link
                  href="https://fonts.googleapis.com/icon?family=Material+Icons"
                  rel="stylesheet"
                />
                <div
                  style={{
                    ...styles.container,
                    flexDirection: match ? "row" : "column"
                  }}
                >
                  <IntroContainer />
                  <ChatBoxContainer toggleSidebar={this.toggleSidebar} />
                </div>
              </div>
            </SidebarContainer>
          );
        }}
      </MediaQuery>
    );
  }
}

HomePage.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  sidebarActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    sidebarOpen: state.sidebarOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sidebarActions: bindActionCreators(SidebarActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

const styles = {
  background: {
    display: "flex",
    minHeight: 100 + "vh",
    position: "relative",
    background:
      "radial-gradient( circle farthest-corner at 10% 20%, rgba(69,86,102,1) 0%, rgba(34,34,34,1) 90% )",
    backgroundSize: "400% 400%",
    WebkitAnimation: "Gradient 15s ease infinite",
    MozAnimation: "Gradient 15s ease infinite",
    animation: "Gradient 15s ease infinite"
  },
  container: {
    width: "100%",
    maxWidth: 1200,
    padding: 1 + "rem",
    margin: "auto",
    display: "flex",
    fontFamily: "Inconsolata"
  }
};
