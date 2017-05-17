import React from 'react';
import ProgressBar from '../logged_home/progress_bar';

class SongPlay extends React.Component {
  constructor(props) {
    super(props);
    this.playAudio = this.playAudio.bind(this);
    this.showIcon();
  }

  showIcon() {
    if (this.props.audio.isPlaying) {
      this.setState({ icon: 'assets/pause-icon.png'});
    } else {
      this.setState({ icon: 'assets/play-icon.png'});
    }
  }

  playAudio(e) {

    let $audio = $('audio.player');
    let trackUrl = this.props.song.track_url;
    let $playIcon = $('img.song-play');
    let $img = $('img.play-pause');
    let attr = $img.attr('src');

    debugger;
    if (this.props.song.track_url === this.props.audio.track_url) {
      if (attr === 'assets/play-button.png') {
        $img.attr('src', 'assets/pause-button.png');
        $playIcon.attr('src', 'assets/pause-icon.png');
        $audio[0].play();
      } else {
        $img.attr('src', 'assets/play-button.png');
        $playIcon.attr('src', 'assets/play-icon.png');
        $audio[0].pause();
      }
    } else {
      $audio.attr('src', trackUrl);
      $img.attr('src', 'assets/pause-button.png');
      $playIcon.attr('src', 'assets/pause-icon.png');
      $audio[0].play();
    }
    this.props.receiveAudio(this.props.song);
  }

  render() {
    let song = this.props.song;
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
