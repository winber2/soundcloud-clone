import React from 'react';
import { values } from 'lodash';
import SongContainer from '../song/song_container';

class Stream extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let songs = values(this.props.songs).map( (song,idx) => (
      <SongContainer key={idx} song={song} />
    ));
    return (
      <div className='main-index'>
        <nav className='content-nav'>
          <ul>
            <li>Stream</li>
            <li>Charts</li>
            <li>Discover</li>
          </ul>
        </nav>
        <div className='nav-border' />
        <p>Hear the latest posts from the people you're following</p>
        <ul className='loggedhome-songs'>
          {songs}
        </ul>
      </div>
    );
  }
}

export default Stream;
