import React from 'react';
import { Link } from 'react-router-dom';

class SongDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: '' };
    this.deleteSong = this.deleteSong.bind(this);
    this.editSong = this.editSong.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
  }

  deleteSong() {
    this.props.deleteSong(this.props.song.id);
  }

  editSong() {

  }

  toggleOptions() {
    if (this.state.isActive === 'active') {
      this.setState({ isActive: '' })
    } else {
      this.setState({ isActive: 'active' })
    }
  }

  render() {
    let song = this.props.song;
    return (
      <li className="song-detail">
        <ul>
            <li>
              <div className='heart-icon'/>
              <span>5</span>
            </li>
            <li>
              <div className='repost-icon'/>
              <span>12</span>
            </li>
            <li onClick={this.toggleOptions} >
              <div className='ellipses-icon'/>
              <span className='song-options'>More</span>
              <ul className={`song-options-dropdown ${this.state.isActive}`} >
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
