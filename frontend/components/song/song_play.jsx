import React from 'react';
import ProgressBar from '../logged_home/progress_bar';

class SongPlay extends React.Component {
  constructor(props) {
    super(props);
    this.playAudio = this.playAudio.bind(this);
  }

  playAudio(e) {
    let $audio = $('audio.player');
    let trackUrl = this.props.song.track_url;

    $audio.attr('src', trackUrl);

    let $img = $('img.play-pause');
    let attr = $img.attr('src');

    if (attr === 'assets/play-button.png') {
      $img.attr('src', 'assets/pause-button.png');
      $audio[0].play();
    } else {
      $img.attr('src', 'assets/play-button.png');
      $audio[0].pause();
    }
  }

  render() {
    let song = this.props.song;
    return (
      <ul className='song-play-info'>
        <img onClick={this.playAudio} src="assets/play-icon.png" className='song-play'></img>
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
