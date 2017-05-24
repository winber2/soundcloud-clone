import React from 'react';
import SidebarSongContainer from './sidebar_song_container';
import SidebarUserContainer from './sidebar_user_container';
import { values } from 'lodash';
import { Route, Switch } from 'react-router-dom';

class SideBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = { offset: 0, userIds: [], songIds: [] }
  }

  componentDidMount() {
    let sidebar = this;
    this.props.fetchRandomUsers(this.state.offset)
      .then((action) => sidebar.setState({ userIds: Object.keys(action.users) }));
    this.props.fetchRandomSongs(this.state.offset)
      .then((action) => {
        return sidebar.setState({ songIds: Object.keys(action.songs) })
      });
    // this.setState({
    //   offset: Math.floor(Math.random() * 10)
    // });
  }

  // componentWillReceiveProps(nextProps) {
  //   let sidebar = this;
  //   if (this.state.songIds.some( id => (
  //     nextProps.songs[id] === undefined
  //   ))) {
  //     this.props.fetchRandomSongs(this.state.offset)
  //       .then((action) => {
  //         delete action.songs['order'];
  //         return sidebar.setState({ songIds: Object.keys(action.songs) })
  //       });
  //   }
  // }

  // shouldUpdate(nextUsers, nextSongs) {
  //   if (this.props.random.users.length === 0 || this.props.random.songs.length === 0) {
  //     return false;
  //   }
  //   for (let i = 0; i < 3; i++) {
  //     if (nextUsers[i].followers.length != this.props.random.users.followers.length) {
  //       return true
  //     } else if (nextSongs[i].favorites.length != this.props.random.songs.favorites.length) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   }
  // }

  // randomSongs() {
  //   let songs = values(this.props.songs);
  //   let randomSongs = [];
  //   let ids = [];
  //   let id = Math.floor(Math.random() * songs.length);
  //
  //   if (songs.length < 3) return [];
  //
  //   for (var i = 0; i < 3; i++) {
  //     while (ids.includes(id)) {
  //       id = Math.floor(Math.random() * songs.length);
  //     }
  //     ids.push(id);
  //     randomSongs.push(songs[id])
  //   }
  //
  //   return randomSongs;
  // }
  //
  // randomUsers() {
  //   let users = values(this.props.users);
  //   let randomUsers = [];
  //   let ids = [];
  //   let id = Math.floor(Math.random() * users.length);
  //
  //   if (users.length < 3) return [];
  //
  //   for (var i = 0; i < 3; i++) {
  //     while (ids.includes(id) || id === this.props.currentUser.id) {
  //       id = Math.floor(Math.random() * users.length);
  //     }
  //     ids.push(id);
  //     randomUsers.push(users[id])
  //   }
  //
  //   return randomUsers;
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
    let songs = [];
    let users = [];
    this.state.songIds.forEach( id => {
      songs.push(this.props.songs.random[id]);
    })
    this.state.userIds.forEach( id => {
      users.push(this.props.users[id]);
    });
    songs = songs.map( song => (
      <SidebarSongContainer song={song} key={song.id} />
    ));
    users = users.map( user => (
      <SidebarUserContainer user={user} key={user.id} />
    ));

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
