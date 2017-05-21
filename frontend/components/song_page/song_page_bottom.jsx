import React from 'react';
import Comment from '../comments/comment';
import { values } from 'lodash';
import SongPlayButtonContainer from '../song/song_play_button_container';
import CommentCreationContainer from '../comments/comment_creation_container';
import SideBarContainer from '../sidebar/sidebar_container';

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
        <Comment comment={comment} key={comment.id} />
      ));
    }
    return (
      <ul className='song-page-bottom-main'>
        <CommentCreationContainer song={this.props.song} />
        <ul className='song-page-bottom-info'>
          <ul className='artist-info'>
            <li><img src={song.user.profile_image_url} /></li>
            <li><p>{song.user.username}</p></li>
            <li><p>Follow</p></li>
          </ul>
          <ul className='comments'>
            <li className='song-description'>
              <p>{song.description}</p>
            </li>
            <li className='song-comments'>
              <img src='http://res.cloudinary.com/winber1/image/upload/v1495075515/comment_lqle6o.png'/>
              <span>12 comments</span>
            </li>
            {comments}
          </ul>
        </ul>
      </ul>
    );
  }
}

export default SongPageBottom;
