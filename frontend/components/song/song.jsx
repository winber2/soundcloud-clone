import React from 'react';
import SongPlay from './song_play';
import SongDetail from './song_detail';

class Song extends React.Component {
  constructor(props) {
    super(props);
  }

  showSong() {
    let song = this.props.song;
    let user = song.user.username;
    window.location.hash = `/${user}/songs/${song.id}`;
  }

  render() {
    let song = this.props.song;
    return (
      <li className='song-container'>
        <img onClick={this.showSong} src={song.image_url}></img>
        <ul className='song-info'>
          <SongPlay song={this.props.song} />
          <li>
            <span>waveform</span>
          </li>
          <SongDetail />
        </ul>
      </li>
    );
  }
}

export default Song;
