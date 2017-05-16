import React from 'react';

class SongPlay extends React.Component {
  constructor(props) {
    super(props);
    this.playAudio = this.playAudio.bind(this);
  }

  playAudio(e) {
    e.preventDefault();

    let $audio = $('audio.player');
    let trackUrl = this.props.song.track_url;

    $audio.attr('src', trackUrl);
    $audio[0].play();
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
