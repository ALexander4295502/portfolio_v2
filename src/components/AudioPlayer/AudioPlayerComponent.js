import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import { Howl, Howler } from "howler";

import "../../static/css/audioPlayer.css";

import { float2Int, getRandomInt } from "../../helper/foundations";

export default class AudioPlayerComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.intervalId = null;
    this.state = {
      currentSongIndex: 0,
      mute: false,
      progress: 0,
      duration: "0:00",
      playingMode: 0, // 0: loop, 1: repeat, 2: shuffle
      playing: false,
      initializing: true
    };
    this.playlist = this.props.playlist.map(song => ({
      name: song.name,
      howl: new Howl({
        src: [song.src],
        onend: this.playerEndHandler,
        onplayerror: this.playerErrorHandler
      })
    }));
    momentDurationFormatSetup(moment);
  }

  componentDidMount() {
    this.playlist[this.state.currentSongIndex].howl.on("load", () => {
      this.setState(
        {
          initializing: false
        },
        () => {
          this.updateSongInfo();
          this.initializerFinishedHandler();
        }
      );
    });
  }

  initializerFinishedHandler() {
    if (this.props.reRenderHandler) {
      this.props.reRenderHandler();
    }
  }

  playerErrorHandler = () => {
    this.playlist[this.state.currentSongIndex].howl.once("unlock", () => {
      this.playlist[this.state.currentSongIndex].howl.play();
    });
  };

  playerEndHandler = () => {
    switch (this.state.playingMode) {
      case 0:
        this.playSong(this.loopIndex(true));
        break;
      case 1:
        this.playSong();
        break;
      case 2:
        this.playSong(getRandomInt(0, this.props.playlist.length));
        break;
      default:
        this.playSong();
        break;
    }
  };

  switchPlayMode = () => {
    this.setState({
      playingMode: this.state.playingMode === 2 ? 0 : this.state.playingMode + 1
    });
  };

  playSong = index => {
    this.setState(
      {
        currentSongIndex:
          index !== undefined ? index : this.state.currentSongIndex,
        playing: true
      },
      () => {
        this.updateSongInfo();
        this.playlist[this.state.currentSongIndex].howl.play();
        this.intervalId = setInterval(() => {
          this.setState({
            progress: float2Int(
              this.playlist[this.state.currentSongIndex].howl.seek()
            )
          });
          if (
            this.playlist[this.state.currentSongIndex].howl.playing() !==
            this.state.playing
          ) {
            this.playlist[this.state.currentSongIndex].howl.play();
          }
        }, 100);
      }
    );
  };

  pauseSong = () => {
    if (this.state.playing) {
      this.playlist[this.state.currentSongIndex].howl.pause();
      this.setState(
        {
          playing: false
        },
        () => {
          if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
        }
      );
    }
  };

  stopSong = callback => {
    this.playlist[this.state.currentSongIndex].howl.stop();
    this.setState(
      {
        playing: false,
        progress: 0
      },
      () => {
        if (this.intervalId) {
          clearInterval(this.intervalId);
          this.intervalId = null;
        }
        callback();
      }
    );
  };

  loopIndex = forward => {
    if (forward) {
      return this.state.currentSongIndex === this.props.playlist.length - 1
        ? 0
        : this.state.currentSongIndex + 1;
    } else {
      return this.state.currentSongIndex === 0
        ? this.props.playlist.length - 1
        : this.state.currentSongIndex - 1;
    }
  };

  skipSong = next => {
    if (next) {
      this.stopSong(() => {
        this.setState(
          {
            progress: 0,
            currentSongIndex: this.loopIndex(true)
          },
          () => {
            this.updateSongInfo();
            this.playSong();
          }
        );
      });
    } else {
      this.stopSong(() => {
        this.setState(
          {
            progress: 0,
            currentSongIndex: this.loopIndex(false)
          },
          () => {
            this.updateSongInfo();
            this.playSong();
          }
        );
      });
    }
  };

  updateSongInfo = () => {
    this.setState({
      duration: this.playlist[this.state.currentSongIndex].howl.duration()
    });
  };

  renderSwitchMode = () => {
    if (this.state.playingMode === 0) {
      return <i className="material-icons">repeat</i>;
    } else if (this.state.playingMode === 1) {
      return <i className="material-icons">repeat_one</i>;
    } else {
      return <i className="material-icons">shuffle</i>;
    }
  };

  muteHandler = () => {
    this.setState(
      {
        mute: !this.state.mute
      },
      () => {
        Howler.volume(this.state.mute ? 0.0 : 1.0);
      }
    );
  };

  clickPressBarHandler = event => {
    const bounds = event.target.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const totalWidth = event.target.clientWidth;
    this.setState(
      {
        progress: (this.state.duration * relativeX) / totalWidth
      },
      () => {
        this.playlist[this.state.currentSongIndex].howl.seek(
          this.state.progress
        );
      }
    );
  };

  render() {
    if (this.state.initializing) {
      return (
        <div className="info">
          <h1 className="loading-text">Loading source...</h1>
        </div>
      );
    } else {
      return (
        <div className="info">
          <div className="progress-bar-container">
            <div className="time--current">
              {this.state.progress === 0
                ? "0:00"
                : moment.duration(this.state.progress, "seconds").format()}
            </div>
            <div className="progress-bar" onClick={this.clickPressBarHandler}>
              <div
                className="fill"
                style={{
                  width:
                    (!this.state.duration || this.state.duration === "0:00"
                      ? 0
                      : (this.state.progress / this.state.duration) * 100) + "%"
                }}
              />
            </div>
            <div className="time--total">
              {!this.state.duration || this.state.duration === "0:00"
                ? "0:00"
                : moment.duration(this.state.duration, "seconds").format()}
            </div>
          </div>
          <div className="currently-playing">
            <h2 className="song-name">
              {this.playlist[this.state.currentSongIndex].name}
            </h2>
          </div>
          <div className="controls">
            <div className="volume" onClick={this.muteHandler}>
              {this.state.mute ? (
                <i className="fas fa-volume-off" />
              ) : (
                <i className="fas fa-volume-up" />
              )}
            </div>
            <div
              className="previous"
              onClick={() => {
                this.skipSong(false);
              }}
            >
              <i className="fas fa-backward" />
            </div>
            {this.state.playing ? (
              <div className="pause" onClick={this.pauseSong}>
                <i className="fas fa-pause" />
              </div>
            ) : (
              <div
                className="play"
                onClick={() => {
                  this.playSong();
                }}
              >
                <i className="fas fa-play" />
              </div>
            )}
            <div
              className="next"
              onClick={() => {
                this.skipSong(true);
              }}
            >
              <i className="fas fa-forward" />
            </div>
            <div className="shuffle" onClick={this.switchPlayMode}>
              {this.renderSwitchMode()}
            </div>
          </div>
        </div>
      );
    }
  }
}

AudioPlayerComponent.propTypes = {
  playlist: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      src: PropTypes.string
    })
  ).isRequired,
  reRenderHandler: PropTypes.func
};
