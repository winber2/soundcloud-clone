import React from 'react';
import ProgressBar from '../logged_home/progress_bar';
import SongPlayButtonContainer from './song_play_button_container';

class SongPlay extends React.Component {
  constructor(props) {
    super(props);
    this.showUser = this.showUser.bind(this);
  }

  showUser() {
    let user = this.props.song.user.username;
    let songId = this.props.song.id;
    window.location.hash = `${user}`;
  }

  render() {
    let song = this.props.song || { user: {} };
    return (
      <ul className='song-play-info'>
        <SongPlayButtonContainer song={song} />
        <ul>
          <li>
            <span onClick={this.showUser}>{song.user.username}</span>
          </li>
          <li>
            <span className='song-title' onClick={this.props.showSong}>{song.title}</span>
          </li>
        </ul>
      </ul>
    );
  }
}

export default SongPlay;
