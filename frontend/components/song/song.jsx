import React from 'react';
import SongPlay from './song_play';
import SongDetail from './song_detail';

class Song extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let song = this.props.song;
    return (
      <li className='song-container'>
        <img src={song.image_url}></img>
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
