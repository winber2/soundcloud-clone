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

  chartBox() {
    return (
      <div className='chart-box'>
        <div className='chart-picture' />
      </div>
    )
  }

  userDescription() {
    let users = this.props.users;
    let user = this.props.match.params.username;
    for (let key in users) {
      if (users[key].username === user) {
        user = users[key];
        break;
      }
      user = {}
    };
    return (
      <div className='user-description'>
        <p>{user.description}</p>
      </div>
    )
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
