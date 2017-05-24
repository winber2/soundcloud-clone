import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteIconContainer from '../icons/favorite_container';
import RepostIcon from '../icons/repost';

class SongDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: '' };
    this.deleteSong = this.deleteSong.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
  }

  deleteSong() {
    this.props.deleteSong(this.props.song.id);
  }

  toggleOptions() {
    if (this.state.isActive === 'active') {
      this.setState({ isActive: '' });
    } else {
      this.setState({ isActive: 'active' });
    }
  }

  render() {
    let song = this.props.song;
    return (
      <li className="song-detail">
        <ul>
          <FavoriteIconContainer favoritable={song}/>
          <RepostIcon />
          <li tabIndex='0' onBlur={this.toggleOptions} className='more-options' onClick={this.toggleOptions} >
            <div className='ellipses-icon'/>
            <span className='song-options'>More</span>
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
          </li>
        </ul>
        <ul>
            <li>
              <div className='comment-icon'/>
              <span>{this.props.comments}</span>
            </li>
        </ul>
      </li>
    );
  }
}

export default SongDetail;
