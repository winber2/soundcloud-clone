import React from 'react';
import SidebarSongContainer from './sidebar_song_container';
import SidebarUserContainer from './sidebar_user_container';
import { values } from 'lodash';
import { Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route path='/stream' component={() => (
              <div className='chart-box'>
                <div className='chart-picture' />
              </div>
            )} />
          <Route path='/:username' component={() => (
              <div className='user-description'>
                <p>DESCRIPTION for days plaosfosjgosjgkjsg</p>
              </div>
          )} />
        </Switch>
        <li className='artist-suggestion'>
          <span className='follow'>Who to follow</span>
          <ul>
            {users}
          </ul>
        </li>
        <li className='song-suggestion'>
          <span className='like'>Related Tracks</span>
          <ul>
            {songs}
          </ul>
        </li>
      </aside>
    );
  }
}

export default SideBar;
