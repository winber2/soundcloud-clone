import React from 'react';
import { values } from 'lodash';
import { NavLink } from 'react-router-dom';
import SongContainer from '../song/song_container';
import SideBarContainer from '../sidebar/sidebar_container';
import Infinite from 'react-infinite';

class Stream extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  handleInfiniteLoad() {
    console.log('adsf');
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
            <Infinite
              elementHeight={200}
              infiniteLoadBeginEdgeOffset={800}
              onInfiniteLoad={this.handleInfiniteLoad}
              useWindowAsScrollContainer>
              {songs}
            </Infinite>
          </ul>
        </div>
        <SideBarContainer />
      </main>
    );
  }
}

export default Stream;
