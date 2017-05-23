import React from 'react';
import { values } from 'lodash';
import { NavLink } from 'react-router-dom';
import SongContainer from '../song/song_container';
import SideBarContainer from '../sidebar/sidebar_container';
import Infinite from 'react-infinite';

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = { songOffset: 0 };
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
  }

  componentDidMount() {
    this.props.fetchSongs({
      user: this.props.currentUser.id,
      offset: this.state.songOffset
    });
  }

  handleInfiniteLoad() {
    if (this.state.songOffset !== 0) {
      this.state.songOffset += 5;
      this.props.fetchMoreSongs({
        user: this.props.currentUser.id,
        offset: this.state.songOffset
      });
    } else {
      this.state.songOffset += 5;
    }
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
              infiniteLoadBeginEdgeOffset={200}
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
