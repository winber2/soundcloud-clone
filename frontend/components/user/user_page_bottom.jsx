import React from 'react';
import { values } from 'lodash';
import SidebarContainer from '../sidebar/sidebar_container';
import SongContainer from '../song/song_container';
import { NavLink } from 'react-router-dom';
import FollowContainer from '../icons/follow_container';

class UserPageBottom extends React.Component {
  constructor(props) {
    super(props);
    this.editUser = this.editUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.id !== this.props.user.id) {
      let username = nextProps.match.params.username;
      this.props.fetchUser(username);
    }
  }

  editUser() {
    let user = this.props.currentUser;
    this.props.history.push(`/${user.username}/edit`);
  }

  render() {
    let songs = values(this.props.user.songs).map( song => {
      song.user = this.props.user;
      return(<SongContainer key={song.id} song={song} />);
    });
    let edit = this.props.currentUser.id !== this.props.user.id ? '' :
        <button onClick={this.editUser} className='user-page-edit'>Edit</button>;
    return (
      <section className='user-page-bottom'>
        <ul className='user-page-nav'>
          <li><NavLink exact to={`/${this.props.user.username}`}>Tracks</NavLink></li>
          <li><NavLink to={`/${this.props.user.username}/tracks`}>Playlists</NavLink></li>
          <li><NavLink to={`/${this.props.user.username}/tracks`}>Reposts</NavLink></li>
          <li className='user-page-options'>
            {edit}
            <FollowContainer user={this.props.user} />
          </li>
        </ul>
        <ul className='user-page-bottom-content'>
          <ul className='user-page-songs'>
            {songs}
          </ul>

          <SidebarContainer />
        </ul>
      </section>
    )
  }
}

export default UserPageBottom;
