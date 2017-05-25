import React from 'react';
import { Link } from 'react-router-dom';

class MoreOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: '' };
    this.deleteSong = this.deleteSong.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
    this.closeOptions = this.closeOptions.bind(this);
  }

  deleteSong() {
    this.props.deleteSong(this.props.song.id);
    if (this.props.match.params.songId !== undefined) {
      window.location.hash = `/${this.props.song.user.username}`;
    }
  }

  toggleOptions() {
    if (this.state.isActive === 'active') {
      this.setState({ isActive: '' });
    } else {
      this.setState({ isActive: 'active' });
    }
  }

  closeOptions() {
    setTimeout(() => {
      if (this.state.isActive === 'active') {
        this.setState({ isActive: '' });
      }
    }, 80);
  }

  render() {
    let song = this.props.song;
    let options = (
      <ul className={`song-options-dropdown ${this.state.isActive}`}>
        <a className='song-options-item'>
          <li>Add to Playlist</li>
        </a>
      </ul>
    );
    if (this.props.currentUser.id === song.author_id) {
      options = (
        <ul className={`song-options-dropdown ${this.state.isActive}`} >
          <a className='song-options-item'>
            <li>Add to Playlist</li>
          </a>
          <Link className='song-options-item' to={`${song.user.username}/songs/${song.id}/edit`}>
            <li>Edit</li>
          </Link>
          <a className='song-options-item'>
            <li onClick={this.deleteSong}>Delete</li>
          </a>
        </ul>
      );
    }
    return (
      <li tabIndex='0' onBlur={this.closeOptions} className='more-options' onClick={this.toggleOptions} >
        <div className='ellipses-icon'/>
        <span className='song-options'>More</span>
        {options}
      </li>
    );
  }
}

export default MoreOptions;
