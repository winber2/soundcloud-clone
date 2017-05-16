import React from 'react';

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
          <ul className='song-play-info'>
            <img src="assets/play-icon.png" />
            <ul>
              <li>
                <span>{song.user.username}</span>
              </li>
              <li>
                <h3>{song.title}</h3>
              </li>
            </ul>
          </ul>
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
