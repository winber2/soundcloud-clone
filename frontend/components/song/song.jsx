import React from 'react';
import SongPlay from './song_play';
import SongDetailContainer from './song_detail_container';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.showSong = this.showSong.bind(this);
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
          <SongPlay song={song} />
          <li>
            <span>waveform</span>
          </li>
          <SongDetailContainer song={this.props.song} />
        </ul>
      </li>
    );
  }
}

export default Song;
