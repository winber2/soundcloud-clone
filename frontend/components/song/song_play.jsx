import React from 'react';
import ProgressBar from '../logged_home/progress_bar';
import SongPlayButtonContainer from './song_play_button_container';

class SongPlay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let song = this.props.song || { user: {} };
    return (
      <ul className='song-play-info'>
        <SongPlayButtonContainer song={song} />
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
