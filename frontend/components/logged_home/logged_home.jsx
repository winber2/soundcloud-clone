import React from 'react';
import { values } from 'lodash';
import Navigation from './navigation';

class LoggedHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    let songs = values(this.props.songs).map( (song,idx) => (
      <li key={song.id}>
        <img src={song.image_url}></img>
      </li>
    ));
    return (
      <div className='loggedhome'>
        <header className='loggedhome-header'>
          <Navigation logout={this.props.logout} currentUser={this.props.currentUser}/>
        </header>
        <main className='loggedhome-body'>
          <ul className='loggedhome-songs'>
            {songs}
          </ul>
          <aside className='loggedhome-sidebar'>
            <ul>
              hello
            </ul>
          </aside>
        </main>
      </div>
    );
  }
}

export default LoggedHome;
