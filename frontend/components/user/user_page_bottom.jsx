import React from 'react';
import { values, merge } from 'lodash';
import SidebarContainer from '../sidebar/sidebar_container';
import SongContainer from '../song/song_container';
import { NavLink, Route, Switch } from 'react-router-dom';
import FollowContainer from '../icons/follow_container';

class UserPageBottom extends React.Component {
  constructor(props) {
    super(props);
    this.editUser = this.editUser.bind(this);
  }

  componentDidMount() {
    let username = this.props.match.params.username;
    this.props.fetchUser(username);
    this.props.fetchUserSongs({ username: username });
  }

  componentWillReceiveProps(nextProps) {
    let l = nextProps.location.pathname.length;
    if (nextProps.location.pathname !== this.props.location.pathname) {
      let username = nextProps.match.params.username;
      this.props.fetchUser(username);
      this.props.fetchUserSongs({ user_id: nextProps.user.id });
    }
  }

  showSongs() {
    let songs;
    let path = this.props.location.pathname;
    if (path.slice(path.length - 7) === 'reposts') {
      songs = values(this.props.user.reposts).map( song => {
        return(<SongContainer key={song.id} song={song} />);
      });
    } else {
      let songsToConvert = merge({}, this.props.songs);
      delete songsToConvert['random'];
      delete songsToConvert['order'];
      songs = values(songsToConvert).map( song => {
        return(<SongContainer key={song.id} song={song} />);
      });
    }
    return (
      <ul className='user-page-songs'>
        {songs}
      </ul>
    );
  }

  editUser() {
    let user = this.props.currentUser;
    this.props.history.push(`/${user.username}/edit`);
  }

  render() {
    let user = this.props.user;
    let option = this.props.currentUser.id !== this.props.user.id ?
        <FollowContainer user={this.props.user} /> :
        <button onClick={this.editUser} className='user-page-edit'>Edit</button>;
    return (
      <section className='user-page-bottom'>
        <ul className='user-page-nav'>
          <li><NavLink exact to={`/${this.props.user.username}`}>Tracks</NavLink></li>
          <li><NavLink to={`/${this.props.user.username}/playlists`}>Playlists</NavLink></li>
          <li><NavLink to={`/${this.props.user.username}/reposts`}>Reposts</NavLink></li>
          <li className='user-page-options'>
            {option}
          </li>
        </ul>
        <ul className='user-page-bottom-content'>
          <ul className='user-page-songs'>
            {this.showSongs()}
          </ul>

          <SidebarContainer />
        </ul>
      </section>
    );
  }
}

export default UserPageBottom;
