import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'https://res.cloudinary.com/winber1/image/upload/v1495075515/play-button_fp3mtc.png',
      progress: undefined,
      activePlayer: '',
      duration: 0
    };
    this.togglePlay = this.togglePlay.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.showUser = this.showUser.bind(this);
    this.showSong = this.showSong.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
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
      setTimeout(() => audio.player.play(), 25);
      this.setState({
        icon: 'https://res.cloudinary.com/winber1/image/upload/v1495075515/pause-button_c63tuy.png'
      });
    } else if (audio.isPlaying === false) {
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

  componentWillUnmount() {
    clearInterval(this.state.progress);
    this.props.audio.song.track_url = '';
    this.state.activePlayer = '';
    this.props.receiveAudio({
      song: { track_url: undefined, id: undefined, user: {} },
      player: null,
      isPlaying: false
    });
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
        progressBar.nextSong();
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
    let width = e.nativeEvent.srcElement.clientWidth;
    let bar = this.refs.progress;
    player.currentTime = point / width * player.duration;
    bar.style.width = point / width * 100 + '%';
    this.updatePlayer();
  }

  showUser() {
    window.location.hash = `/${this.props.audio.song.user.username}`;
  }

  showSong() {
    let song = this.props.audio.song;
    window.location.hash = `/${song.user.usename}/songs/${song.id}`;
  }

  prevSong() {
    let order = this.props.songs.order;
    let prevSongId = undefined;
    for (let i = 0; i < order.length; i++) {
      if (order[i] === this.props.audio.song.id) {
        prevSongId = order[i - 1];
      }
    }
    if (prevSongId === undefined) {
      prevSongId = order[order.length - 1];
    }
    let audio = this.props.audio;
    audio.song = this.props.songs[prevSongId];
    this.props.receiveAudio(audio);
  }

  nextSong() {
    let order = this.props.songs.order;
    let nextSongId = undefined;
    for (let i = 0; i < order.length; i++) {
      if (order[i] === this.props.audio.song.id) {
        nextSongId = order[i + 1];
      }
    }
    if (nextSongId === undefined) {
      nextSongId = order[0];
    }
    let audio = this.props.audio;
    audio.song = this.props.songs[nextSongId];
    this.props.receiveAudio(audio);
  }

  render() {
    let song = this.props.audio.song;
    let player = this.props.audio.player || {};
    if (this.props.audio.isPlaying) this.updatePlayer();
    let currentTime = this.convertTime(player.currentTime);
    let duration = player.duration ? this.convertTime(player.duration) : `${this.state.duration}`;
    return (
      <footer id="music-player" className={this.state.activePlayer}>
        <div className="inner">
          <audio ref='audioPlayer' className="player" src={song.track_url}/>

          <div className="controls">
            <img onClick={this.prevSong} className="previous" src="https://res.cloudinary.com/winber1/image/upload/v1495075514/back-button_aibqnf.png"></img>
            <img onClick={this.togglePlay} className="play-pause" src={this.state.icon}></img>
            <img onClick={this.nextSong} className="next" src="https://res.cloudinary.com/winber1/image/upload/v1495075515/skip-button_fy0rmx.png"></img>
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
                <img src={song.image_url} />
              </div>

              <div className="song-info">
                <span onClick={this.showUser} className="artist">{song.user.username}</span>
                <span onClick={this.showSong} className="song">{song.title}</span>
              </div>
            </div>

          </div>
        </div>
      </footer>
    );
  }
}

export default ProgressBar;
