import React from 'react';
import { values } from 'lodash';
import { NavLink } from 'react-router-dom';
import SongContainer from '../song/song_container';
import SideBarContainer from '../sidebar/sidebar_container';

class Stream extends React.Component {
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
      <main className='loggedhome-body'>
        <div className='main-index'>
          <nav className='content-nav'>
            <ul>
              <li>
                <NavLink to='/stream'>Stream</NavLink>
              </li>
              <li><NavLink to='/charts'>Charts</NavLink></li>
              <li><NavLink to='/discover'>Discover</NavLink></li>
            </ul>
          </nav>
          <div className='nav-border' />
          <p>Hear the latest posts from the people you're following</p>
          <ul className='loggedhome-songs'>
            {songs}
          </ul>
        </div>
        <SideBarContainer />
      </main>
    );
  }
}

export default Stream;
