import React from 'react';
import Comment from '../comments/comment';
import { values } from 'lodash';
import SongPlayButtonContainer from '../song/song_play_button_container';
import CommentCreationContainer from '../comments/comment_creation_container';
import SideBarContainer from '../sidebar/sidebar_container';
import { Link } from 'react-router-dom';
import FollowContainer from '../icons/follow_container';

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
    let song = this.props.song;
    song.user.followers = song.user.followers || [];
    let comments;
    let follow = '';
    let description = this.props.song.description;
    if (this.props.comments !== {} ) {
      comments = values(this.props.comments).map( (comment) => (
        <Comment currentUser={this.props.currentUser}
          editComment={this.props.editComment}
          comment={comment}
          deleteComment={this.props.deleteComment}
          key={comment.id} />
      ));
    }
    if (description !== undefined) {
      description = description.split("\n").map( (item,idx) => (
        <p key={idx}>
          {item}
          <br />
        </p>
      ));
    }
    if (this.props.currentUser !== this.props.song.author_id) {
      follow = <FollowContainer
        user={this.props.user}
        key={this.props.user.id}/>;
    }
    return (
      <ul className='song-page-bottom-main'>
        <CommentCreationContainer song={song} />
        <ul className='song-page-bottom-info'>
          <ul className='artist-info'>
            <li><Link to={`/${song.user.username}`}>
              <img src={song.user.profile_image_url} />
            </Link></li>
            <li><Link to={`/${song.user.username}`}>{song.user.username}</Link></li>
            <li><p>{song.user.followers.length}</p></li>
            {follow}
          </ul>
          <ul className='comments'>
            <li className='song-description'>
              {description}
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
