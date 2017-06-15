import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Link } from 'react-router-dom';
import SongContainer from '../song/song_container';
import SideBarContainer from '../sidebar/sidebar_container';
import InfiniteScroll from 'react-infinite-scroller';

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = { songOffset: 0, scroll: false, order: [] };
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchSongs({
      query: {
        user: this.props.currentUser.id,
        offset: this.state.songOffset
      }
    }).then(() => this.setState({ scroll: true }));
  }

  componentWillUnmount() {
    this.state = { songOffset: 0, scroll: false, order: [] };
  }

  handleInfiniteLoad() {
    if (this.state.songOffset > 50) {
      this.setState({ scroll: false });
    } else if (this.state.scroll === true) {
      this.state.songOffset += 5;
      this.props.fetchMoreSongs({
        query: {
          user: this.props.currentUser.id,
          offset: this.state.songOffset
        }
      });
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
              <li><Link to='/stream'>Charts</Link></li>
              <li><Link to='/stream'>Discover</Link></li>
            </ul>
          </nav>
          <div className='nav-border' />
          <p>Hear the latest posts from the people you're following</p>
          <ul className='loggedhome-songs'>
            <InfiniteScroll
              pageStart={0}
              threshold={50}
              hasMore={this.state.scroll}
              loadMore={this.handleInfiniteLoad}
              loader={<div className="infinite-load">Loading ...</div>}
              useWindow={true}>
              {songs}
            </InfiniteScroll>
          </ul>
        </div>
        <SideBarContainer />
      </main>
    );
  }
}

export default Stream;
