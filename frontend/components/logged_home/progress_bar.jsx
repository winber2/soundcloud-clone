import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'https://res.cloudinary.com/winber1/image/upload/v1495075515/play-button_fp3mtc.png',
      progress: undefined,
      activePlayer: ''
    };
    this.togglePlay = this.togglePlay.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  convertTime(currentTime) {
    let time = Math.floor(currentTime)
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    if ( minutes === 0 ) {
      return `0:${seconds}`;
    }

    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    return `${minutes}:${seconds}`;
  }

  activatePlayer() {
    this.setState({ activePlayer: 'active' });
  }

  componentWillReceiveProps(nextProps) {
    let audio = this.props.audio;
    if (audio.isPlaying) {
      this.activatePlayer();
      audio.player.play();
      this.setState({
        icon: 'https://res.cloudinary.com/winber1/image/upload/v1495075515/pause-button_c63tuy.png'
      });
    } else {
      audio.player.pause();
      this.setState({
        icon: 'https://res.cloudinary.com/winber1/image/upload/v1495075515/play-button_fp3mtc.png'
      });
      this.pausePlayer();
    }
  }

  componentDidMount() {
    let audio = this.props.audio;
    let player = this.refs.audioPlayer;
    audio.player = player;
    this.props.receivePlayer(audio);
  }

  togglePlay() {
    let audio = this.props.audio;
    let player = audio.player;

    if (audio.isPlaying) {
      audio.isPlaying = false;
      this.setState({ icon: 'https://res.cloudinary.com/winber1/image/upload/v1495075515/pause-button_c63tuy.png' });
    } else {
      audio.isPlaying = true;
      this.setState({
        icon: 'https://res.cloudinary.com/winber1/image/upload/v1495075515/play-button_fp3mtc.png'
      });
    }

    this.props.receiveAudio(audio);
  }

  pausePlayer() {
    clearInterval(this.state.progress);
  }

  updatePlayer() {
    clearInterval(this.state.progress);

    let player = this.props.audio.player;
    let bar = this.refs.progress;
    let width = player.currentTime / player.duration * 100;
    let widthChange = 1 / player.duration * 20;
    let progressBar = this;

    this.state.progress = setInterval(frame, 200);

    function frame() {
      if (width >= 100) {
        bar.style.width = '0%';
        clearInterval(progressBar.state.progress);
        clearInterval(progrssBar.state.timer);
      } else {
        width += widthChange;
        bar.style.width = width + '%';
      }

      setTimeout( () => progressBar.setState({
        currentTime: progressBar.state.currentTime + .25,
        duration: player.duration
      }), 0);
    }
  }

  handleSelect(e) {
    let point = e.nativeEvent.offsetX;
    let player = this.props.audio.player;
    player.currentTime = point / 495 * player.duration;
  }

  render() {
    let song = this.props.audio.song || { track_url: '' };
    let player = this.props.audio.player || {};
    if (this.props.audio.isPlaying) this.updatePlayer();
    let currentTime = this.convertTime(player.currentTime);
    let duration = player.duration ? this.convertTime(player.duration) : `${this.state.duration}`;
    return (
      <footer id="music-player" className={this.state.activePlayer}>
        <div className="inner">
          <audio ref='audioPlayer' className="player" src={song.track_url} autoPlay/>

          <div className="controls">
            <img className="previous" src="https://res.cloudinary.com/winber1/image/upload/v1495075514/back-button_aibqnf.png"></img>
            <img onClick={this.togglePlay} className="play-pause" src={this.state.icon}></img>
            <img className="next" src="https://res.cloudinary.com/winber1/image/upload/v1495075515/skip-button_fy0rmx.png"></img>
          </div>

          <div className="play-bar">
            <span id="time">{currentTime}</span>
              <div onClick={this.handleSelect} className="bar-box">
                <div className="bar-bg">
                  <div ref='progress' className="progress"></div>
                </div>
              </div>
            <span id="total-time">{duration}</span>
          </div>

         <div className="song-content">

            <div className="user-info">

              <div className="img-wrapper">
                <a className='user-info' />
              </div>

              <div className="song-info">
                <span className="artist">Artist Name</span>
                <span className="song">Song Name</span>
              </div>
            </div>

          </div>
        </div>
      </footer>
    );
  }
}

export default ProgressBar;
