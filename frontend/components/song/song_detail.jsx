import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteIconContainer from '../icons/favorite_container';
import RepostIcon from '../icons/repost';
import MoreOptionsContainer from '../icons/more_options_container';

class SongDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: '' };
    // this.deleteSong = this.deleteSong.bind(this);
    // this.toggleOptions = this.toggleOptions.bind(this);
    // this.closeOptions = this.closeOptions.bind(this);
  }

  // deleteSong() {
  //   this.props.deleteSong(this.props.song.id);
  // }
  //
  // toggleOptions() {
  //   if (this.state.isActive === 'active') {
  //     this.setState({ isActive: '' });
  //   } else {
  //     this.setState({ isActive: 'active' });
  //   }
  // }
  //
  // closeOptions() {
  //   setTimeout(() => {
  //     if (this.state.isActive === 'active') {
  //       this.setState({ isActive: '' });
  //     }
  //   }, 80);
  // }

  render() {
    let song = this.props.song;
    // let options = (
    //   <ul className={`song-options-dropdown ${this.state.isActive}`}>
    //     <a className='song-options-item'>
    //       <li>Add to Playlist</li>
    //     </a>
    //   </ul>
    // );
    // if (this.props.currentUser.id === song.user.author_id) {
    //   options = (
    //     <ul className={`song-options-dropdown ${this.state.isActive}`} >
    //       <a className='song-options-item'>
    //         <li>Add to Playlist</li>
    //       </a>
    //       <Link className='song-options-item' to={`${song.user.username}/songs/${song.id}/edit`}>
    //         <li>Edit</li>
    //       </Link>
    //       <a className='song-options-item'>
    //         <li onClick={this.deleteSong}>Delete</li>
    //       </a>
    //     </ul>
    //   );
    // }
    return (
      <li className="song-detail">
        <ul>
          <FavoriteIconContainer favoritable={song}/>
          <RepostIcon />
          <MoreOptionsContainer song={this.props.song} />
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
