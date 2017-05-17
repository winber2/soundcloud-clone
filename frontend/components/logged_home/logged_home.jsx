import React from 'react';
import { values } from 'lodash';
import Navigation from './navigation';
import SongContainer from '../song/song_container';
import ProgressBar from './progress_bar.jsx';

class LoggedHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    let songs = values(this.props.songs).map( (song,idx) => (
      <SongContainer key={idx} song={song} />
    ));
    return (
      <div className='loggedhome'>
        <header className='loggedhome-header'>
          <Navigation logout={this.props.logout} currentUser={this.props.currentUser}/>
        </header>
        <div className='nav-space' />
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
          <ProgressBar />
      </div>
    );
  }
}

export default LoggedHome;
