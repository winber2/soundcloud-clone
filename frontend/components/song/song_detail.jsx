import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteIconContainer from '../icons/favorite_container';
import RepostIconContainer from '../icons/repost_container';
import MoreOptionsContainer from '../icons/more_options_container';

class SongDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: '' };
  }

  showRepost() {
    let path = this.props.location.pathname;
    if (path.slice(path.length - 7) !== 'reposts') {
      return <RepostIconContainer song={this.props.song} />;
    }
  }

  render() {
    let song = this.props.song;
    return (
      <li className="song-detail">
        <ul>
          <FavoriteIconContainer favoritable={song} />
          {this.showRepost()}
          <MoreOptionsContainer song={this.props.song} />
        </ul>
        <ul>
            <li>
              <div className='comment-icon' />
              <span>{this.props.comments}</span>
            </li>
        </ul>
      </li>
    );
  }
}

export default SongDetail;
