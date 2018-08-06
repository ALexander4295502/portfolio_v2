import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ReactAudio from "react-audioplayer";
import { MESSAGE_PAYLOAD_TYPE_AUDIO } from "../../actions/messages";

export default class MessengerPayload extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      audioHeight: 0,
      audioWidth: 0
    };
    this.audioPlayer = React.createRef();
  }

  componentWillUnmount() {
    if (this.audioPlayer) {
      ReactDOM.findDOMNode(this.audioPlayer).dispatchEvent(
        new Event("audio-pause")
      );
    }
  }

  updateAudioSize = element => {
    if (element) {
      this.setState({
        audioHeight: element.clientHeight,
        audioWidth: element.clientWidth
      });
    }
  };

  render() {
    if (this.props.payload.type === MESSAGE_PAYLOAD_TYPE_AUDIO) {
      return (
        <div
          ref={el => {
            this.updateAudioSize(el);
          }}
          style={styles.container}
        >
          <ReactAudio
            ref={ref => {
              this.audioPlayer = ref;
            }}
            height={this.state.audioHeight}
            width={this.state.audioWidth}
            playlist={this.props.payload.value.playlist}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

MessengerPayload.propTypes = {
  payload: PropTypes.shape({
    type: PropTypes.string.isRequired,
    value: PropTypes.object.isRequired
  }).isRequired
};

const styles = {
  container: {
    marginTop: 1 + "rem",
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.28) 0px 2px 6px"
  }
};
