import React from 'react';
import ProgressBar from '../logged_home/progress_bar';

class SongPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { icon: 'http://res.cloudinary.com/winber1/image/upload/v1495075516/white-play_dbuj1t.ico' };
    this.playAudio = this.playAudio.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let songId = this.props.audio.song.id;
    if (this.props.audio.isPlaying && songId === this.props.song.id) {
      this.setState({ icon: 'http://res.cloudinary.com/winber1/image/upload/v1495075516/white-pause_swxfgv.png'});
    } else {
      this.setState({ icon: 'http://res.cloudinary.com/winber1/image/upload/v1495075516/white-play_dbuj1t.ico'});
    }
  }

  changeIcon() {
    let songId = this.props.audio.song.id;
    if (this.props.audio.isPlaying && this.props.audio.song) {
      this.state = { icon: 'http://res.cloudinary.com/winber1/image/upload/v1495075516/white-pause_swxfgv.png'};
    } else {
      this.state = { icon: 'http://res.cloudinary.com/winber1/image/upload/v1495075516/white-play_dbuj1t.ico'};
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
      icon = 'http://res.cloudinary.com/winber1/image/upload/v1495075516/white-pause_swxfgv.png';
    } else {
      icon = 'http://res.cloudinary.com/winber1/image/upload/v1495075516/white-play_dbuj1t.ico';
    }
    return (
      <ul className='song-play-info'>
        <div className='song-play-icon'>
          <img onClick={this.playAudio} src={this.state.icon} className='song-play'></img>
        </div>
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
