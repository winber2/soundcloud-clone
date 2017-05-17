import React from 'react';
import ProgressBar from '../logged_home/progress_bar';

class SongPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { icon: 'assets/play-icon.png' };
    this.playAudio = this.playAudio.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let songId = this.props.audio.song.id;
    if (this.props.audio.isPlaying && songId === this.props.song.id) {
      this.setState({ icon: 'assets/pause-icon.png'});
    } else {
      this.setState({ icon: 'assets/play-icon.png'});
    }
  }

  changeIcon() {
    let songId = this.props.audio.song.id;
    if (this.props.audio.isPlaying && this.props.audio.song) {
      this.state = { icon: 'assets/pause-icon.png'};
    } else {
      this.state = { icon: 'assets/play-icon.png'};
    }
  }

  playAudio(e) {
    let audio = this.props.audio;
    let player = audio.player;
    audio.song = audio.song || { id: undefined };

    if (this.props.song.id === this.props.audio.song.id) {
      if (audio.isPlaying) {
        audio.isPlaying = false;
        this.props.receiveAudio(audio);
      } else {
        audio.isPlaying = true;
        this.props.receiveAudio(audio);
      }
    } else {
      audio.song = this.props.song;
      audio.isPlaying = true;
      this.props.receiveAudio(audio);
    }
  }

  render() {
    let song = this.props.song;
    let audio = this.props.audio;
    let icon;
    if (audio.isPlaying && audio.song.id === this.props.song.id) {
      icon = 'assets/pause-icon.png';
    } else {
      icon = 'assets/play-icon.png';
    }
    return (
      <ul className='song-play-info'>
        <img onClick={this.playAudio} src={this.state.icon} className='song-play'></img>
        <ul>
          <li>
            <span>{song.user.username}</span>
          </li>
          <li>
            <h3>{song.title}</h3>
          </li>
        </ul>
      </ul>
    );
  }
}

export default SongPlay;
