import React from 'react';
import { values } from 'lodash';
import SidebarContainer from '../sidebar/sidebar_container';
import SongContainer from '../song/song_container';

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
        <div className='user-page-nav'>
          <div className='user-nav-border' />
          <li>Tracks</li>
          <li>Playlists</li>
          <li>Reposts</li>
        </div>
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
