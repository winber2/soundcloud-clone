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
  }

  // randomSongs() {
  //   let songs = values(this.props.songs);
  //   let randomSongs = [];
  //
  //   if (songs.length === 0) return [];
  //
  //   for (var i = 0; i < 3; i++) {
  //     randomSongs.push(songs[Math.floor(Math.random() * songs.length)]);
  //   }
  //
  //   return randomSongs;
  // }

  chartBox() {
    return (
      <div className='chart-box'>
        <div className='chart-picture' />
      </div>
    );
  }

  userDescription() {
    let users = this.props.users;
    let user = {};
    let name = this.props.match.params.username;
    for (let key in users) {
      if (users[key].username === name) {
        user = users[key];
      }
    }
    return (
      <div className='user-description'>
        <p>{user.description}</p>
      </div>
    );
  }

  render() {
    let users = [];
    let songs = values(this.props.songs).slice(0,3).map( song => (
      <SidebarSongContainer song={song} key={song.id} />
    ));
    values(this.props.users).forEach( user => {
      if (user.id === this.props.currentUser.id) return;
      users.push(<SidebarUserContainer user={user} key={user.id}/>);
    });
    return (
      <aside className='loggedhome-sidebar'>
        <Switch>
          <Route exact path='/stream' component={() => this.chartBox()} />
          <Route exact path='/:username' component={() => this.userDescription()} />
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
