import React from 'react';
import { values } from 'lodash';
import SidebarContainer from '../sidebar/sidebar_container';
import SongContainer from '../song/song_container';
import { NavLink } from 'react-router-dom';

class UserPageBottom extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.id !== this.props.user.id) {
      let username = nextProps.match.params.username;
      this.props.fetchUser(username);
    }
  }

  render() {
    let songs = values(this.props.user.songs).map( song => {
      song.user = this.props.user;
      return(<SongContainer key={song.id} song={song} />);
    });
    return (
      <section className='user-page-bottom'>
        <ul className='user-page-nav'>
          <li><NavLink exact to={`/${this.props.user.username}`}>Tracks</NavLink></li>
          <li><NavLink to={`/${this.props.user.username}/tracks`}>Playlists</NavLink></li>
          <li><NavLink to={`/${this.props.user.username}/tracks`}>Reposts</NavLink></li>
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
