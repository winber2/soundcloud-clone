import React from 'react';
import FavoriteIcon from '../icons/favorite'

class SidebarSong extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='sidebar-song'>
        <img src={this.props.song.image_url} />
        <ul className='sidebar-song-info'>
          <p>{this.props.song.user.username}</p>
          <h4>{this.props.song.title}</h4>
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
