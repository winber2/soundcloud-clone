import React from 'react';
import UserShow from '../user/user_show';
import SongShow from '../song/song_show';
import { values } from 'lodash';
import { NavLink } from 'react-router-dom';

class Collection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let category = this.props.location.pathname.slice(12);

    if (category === '') this.props.history.push('/collection/likes');

    if (category === 'likes') {
      this.props.fetchSongs({ liker: this.props.currentUser.id });
    } else if (category === 'playlists') {
      console.log('asdf');
    } else if (category === 'following') {
      this.props.fetchUsers({
        follower: this.props.currentUser.id
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    let category = nextProps.location.pathname.slice(12);
    window.scrollTo(0, 0);
    if (category === '') this.props.history.push('/collection/likes');

    if (nextProps.location.pathname !== this.props.location.pathname) {
      if (category === 'likes') {
        this.props.fetchSongs({ liker: this.props.currentUser.id });
      } else if (category === 'playlists') {
        console.log('asdf');
      } else if (category === 'following') {
        this.props.fetchUsers({
          follower: this.props.currentUser.id
        });
      }
    }
  }

  elementToRender() {
    let category = this.props.location.pathname.slice(12);

    if (category === 'likes') {
      let results = values(this.props.search.songs);
      if (results.length === 0) return (
        <p>You haven't liked anything yet!</p>
      );
      return values(this.props.search.songs).map( song => (
        <SongShow song={song} key={song.id} />
      ));
    } else if (category === 'playlists') {
      return (<p className='nothing'>Sorry, playlists have not been implemented yet!</p>);
    } else if (category === 'following') {
      let results = values(this.props.search.users);
      if (results.length === 0) return (
        <p className='nothing'>You haven't followed anyone yet!</p>
      );
      return values(this.props.search.users).map( user => (
        <UserShow user={user} key={user.id} />
      ));
    }
  }

  render() {
    return (
      <div className='collection-page'>
        <ul className='collection-nav'>
          <li><NavLink exact to={`/collection/likes`}>Likes</NavLink></li>
          <li><NavLink to={`/collection/playlists`}>Playlists</NavLink></li>
          <li><NavLink to={`/collection/following`}>Following</NavLink></li>
        </ul>
        <ul className='collection-results'>
          {this.elementToRender()}
        </ul>
      </div>
    );
  }
}

export default Collection;
