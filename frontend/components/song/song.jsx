import React from 'react';
import SongPlay from './song_play';
import SongDetailContainer from './song_detail_container';
import Wavesurfer from 'react-wavesurfer';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: 0,
      playing: false,
      progress: undefined,
      player: undefined
    };
    this.showSong = this.showSong.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
  }

  componentWillReceiveProps() {
    let audio = this.props.audio;
    if (audio.isPlaying === false) {
      this.state.wavesurfer.pause();
    } else if (audio.song.id === this.props.song.id &&
    audio.song.id !== undefined) {
      this.state.wavesurfer.play(audio.player.currentTime);
    }
  }

  componentDidMount() {
    let style = {
      container: `#waveform-${this.props.song.id}`,
      maxCanvasWidth: 500,
      waveColor: 'gray',
      progressColor: 'orangered',
      barWidth: 2,
      barHeight: 0.95,
      minPxPerSec: 0,
      hideScrollbar: true,
      height: 66,
      pixelRatio: 1,
      backend: 'MediaElement',
      cursorWidth: 0
    };
    var wavesurfer = WaveSurfer.create(style);
    wavesurfer.load(this.props.song.track_url);
    wavesurfer.setMute(true);
    wavesurfer.unAll();
    wavesurfer.on('seek', (int) => this.selectTime(int));
    this.setState({
      wavesurfer: wavesurfer,
      player: this.props.audio.player
    });
  }

  selectTime(int) {
    
    let player = this.state.player;
    let time = player.duration * int;
    player.currentTime = time;
  }

  componentWillUnmount() {
    clearInterval(this.state.progress);
  }

  showSong() {
    let song = this.props.song;
    let user = song.user.username;
    window.location.hash = `/${user}/songs/${song.id}`;
  }

  playPause() {
    WaveSurfer.playPause();
  }

  mute() {
    WaveSurfer.setMute(true);
  }

  togglePlay() {
    this.setState({
      playing: true
    });
  }

  handlePosChange(e) {
    this.setState({
      pos: e.originalArgs[0]
    });
    this.props.audio.player.currentTime = e.originalArgs[0];
  }

  render() {
    let song = this.props.song;
    let trackUrl = song.track_url || '';
    return (
      <li className='song-container'>
        <img onClick={this.showSong} src={song.image_url}></img>
        <ul className='song-info'>
          <SongPlay song={song} showSong={this.showSong}/>
          <div className='waveform-box'>
            <div id={`waveform-${this.props.song.id}`}>
            </div>
          </div>
          <SongDetailContainer song={song} comments={song.number_of_comments} />
        </ul>
      </li>
    );
  }
}

export default Song;
