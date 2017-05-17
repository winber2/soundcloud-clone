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
      <main className='loggedhome-body'>
        <ul className='loggedhome-songs'>
          {songs}
        </ul>
        <aside className='loggedhome-sidebar'>
          <ul>
            <li className='artist-suggestion'>
              <span>Who to follow</span>
              <ul>
                <li>asdf</li>
                <li>asdf</li>
                <li>asdf</li>
              </ul>
            </li>
            <li className='song-suggestion'>
              <span>Song Suggestions</span>
              <ul>
                <li>asdf</li>
                <li>asdf</li>
                <li>asdf</li>
              </ul>
            </li>
          </ul>
        </aside>
      </main>
    );
  }
}

export default Stream;
