import React from 'react';
import SidebarSongContainer from './sidebar_song_container';
import SidebarUserContainer from './sidebar_user_container';
import { vales } from 'lodash';

class SideBar extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
    // this.props.fetchSongs();
  }

  render() {
    let users = []
    let songs = values(this.props.songs).map( song => (
      <SidebarSongContainer song={song} key={song.id} />
    ));
    values(this.props.users).forEach( user => {
      if (user.id === this.props.currentUser.id) return;
      users.push(<SidebarUserContainer user={user} key={user.id}/>);
    })
    return (
      <aside className='loggedhome-sidebar'>
        <div className='chart-box'>
          <div className='chart-picture' />
        </div>
        <li className='artist-suggestion'>
          <span className='follow'>Who to follow</span>
          <ul>
            {users}
          </ul>
        </li>
        <li className='song-suggestion'>
          <span>Song Suggestions</span>
          <ul>
            {songs}
          </ul>
        </li>
      </aside>
    );
  }
}

export default SideBar;
