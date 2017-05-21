import React from 'react';
import Comment from '../comments/comment';
import { values } from 'lodash';
import SongPlayButtonContainer from '../song/song_play_button_container';
import CommentCreationContainer from '../comments/comment_creation_container';
import SideBarContainer from '../sidebar/sidebar_container';
import { Link } from 'react-router-dom';

class SongPageBottom extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.song.id !== this.props.song.id) {
      let songId = nextProps.match.params.songId;
      this.props.fetchComments(songId);
      this.props.fetchSingleSong(songId);
    }
  }

  render() {
    let song = this.props.song || { user: { username: '' }, title: '', image_url: '' };
    let comments;
    if (this.props.comments !== {} ) {
      comments = values(this.props.comments).map( (comment) => (
        <Comment comment={comment}
          deleteComment={this.props.deleteComment}
          key={comment.id} />
      ));
    }
    return (
      <ul className='song-page-bottom-main'>
        <CommentCreationContainer song={this.props.song} />
        <ul className='song-page-bottom-info'>
          <ul className='artist-info'>
            <li><img src={song.user.profile_image_url} /></li>
            <li><Link to={`/${song.user.username}`}>{song.user.username}</Link></li>
            <li><p>54</p></li>
            <button>Follow</button>
          </ul>
          <ul className='comments'>
            <li className='song-description'>
              <p>{song.description}</p>
            </li>
            <li className='song-comments'>
              <span>{this.props.song.number_of_comments} comments</span>
            </li>
            {comments}
          </ul>
        </ul>
      </ul>
    );
  }
}

export default SongPageBottom;
