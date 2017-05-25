import React from 'react';
import { values, merge } from 'lodash';
import SidebarContainer from '../sidebar/sidebar_container';
import SongContainer from '../song/song_container';
import { NavLink } from 'react-router-dom';
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
    if (nextProps.location.pathname !== this.props.location.pathname) {
      let username = nextProps.match.params.username;
      this.props.fetchUser(username);
      this.props.fetchUserSongs({ user_id: nextProps.user.id });
    }
  }

  editUser() {
    let user = this.props.currentUser;
    this.props.history.push(`/${user.username}/edit`);
  }

  render() {
    let user = this.props.user;
    let songsToConvert = merge({}, this.props.songs);
    delete songsToConvert['random'];
    delete songsToConvert['order'];
    let songs = values(songsToConvert).map( song => {
      return(<SongContainer key={song.id} song={song} />);
    });
    let option = this.props.currentUser.id !== this.props.user.id ?
        <FollowContainer user={this.props.user} /> :
        <button onClick={this.editUser} className='user-page-edit'>Edit</button>;
    return (
      <section className='user-page-bottom'>
        <ul className='user-page-nav'>
          <li><NavLink exact to={`/${this.props.user.username}`}>Tracks</NavLink></li>
          <li><NavLink to={`/${this.props.user.username}/tracks`}>Playlists</NavLink></li>
          <li><NavLink to={`/${this.props.user.username}/tracks`}>Reposts</NavLink></li>
          <li className='user-page-options'>
            {option}
          </li>
        </ul>
        <ul className='user-page-bottom-content'>
          <ul className='user-page-songs'>
            {songs}
          </ul>

          <SidebarContainer />
        </ul>
      </section>
    );
  }
}

export default UserPageBottom;
