import React from 'react';
import { values, merge} from 'lodash';
import { NavLink } from 'react-router-dom';
import SongContainer from '../song/song_container';
import SideBarContainer from '../sidebar/sidebar_container';
import Infinite from 'react-infinite';

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = { songOffset: 0, scroll: false, order: [] };
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchSongs({
      user: this.props.currentUser.id,
      offset: this.state.songOffset
    });
  }

  componentWillUnmount() {
    this.setState({ songOffset: 0, scroll: false, order: [] });
  }

  handleInfiniteLoad() {
    if (this.state.scroll === true) {
      this.state.songOffset += 5;
      this.props.fetchMoreSongs({
        user: this.props.currentUser.id,
        offset: this.state.songOffset
      });
    } else {
      this.state.scroll = true;
    }
  }

  render() {
    let songs = [];
    if (this.props.songs.order !== undefined) {
      this.props.songs.order.forEach( id => {
        if (!this.state.order.includes(id)) this.state.order.push(id);
      });
      this.state.order.forEach( id => {
        if (this.props.songs[id] !== undefined) {
          songs.push(this.props.songs[id]);
        }
      });
    }
    songs = songs.map( (song,idx) => (
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
              elementHeight={150}
              infiniteLoadBeginEdgeOffset={100}
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
