import React from 'react';
import SongPlay from './song_play';

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


          <li className='song-detail'>
            <ul>
                <li>
                  heart
                </li>
                <li>
                  rep
                </li>
            </ul>
            <ul>
                <li>
                  plays
                </li>
                <li>
                  coms
                </li>
            </ul>
          </li>


        </ul>
      </li>
    );
  }
}

export default Song;
