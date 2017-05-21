import React from 'react';
import FavoriteIcon from '../icons/favorite'

class SidebarSong extends React.Component {
  constructor(props) {
    super(props);
    this.showSong = this.showSong.bind(this);
    this.showUser = this.showUser.bind(this);
  }

  showSong() {
    let user = this.props.song.user.username;
    window.location.hash = `${user}/songs/${this.props.song.id}`;
  }

  showUser() {
    window.location.hash = `${this.props.song.user.username}`;
  }

  render() {
    return (
      <li className='sidebar-song'>
        <img onClick={this.showSong} src={this.props.song.image_url} />
        <ul className='sidebar-song-info'>
          <p onClick={this.showUser}>{this.props.song.user.username}</p>
          <li><h4 onClick={this.showSong}>{this.props.song.title}</h4></li>
          <ul className='sidebar-song-options'>
            <li>444</li>
            <FavoriteIcon />
          </ul>
        </ul>
      </li>
    );
  }
}

export default SidebarSong;
