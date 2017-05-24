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
    this.props.fetchRandomUsers({ query: this.state.offset })
      .then((action) => sidebar.setState({ userIds: Object.keys(action.users) }));
    this.props.fetchRandomSongs({ query: this.state.offset })
      .then((action) => {
        return sidebar.setState({ songIds: Object.keys(action.songs) })
      });
  }

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
