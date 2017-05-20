import React from 'react';
import FavoriteIcon from '../icons/favorite';

class CommentCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.handleKey = this.handleKey.bind(this)
  }

  handleKey(e) {
    if (e.key === 'Enter' && e.target.value !== '') {
      let comment = {
        author_id: this.props.currentUser.id,
        song_id: this.props.song.id,
        body: e.target.value,
        user: this.props.currentUser
      }
      this.props.createComment(comment);
      e.target.value = '';
    }
  }

  render() {
    return (
      <div className='comment-creation'>
        <div className='comment-input'>
          <img className='comment-user' src={this.props.currentUser.profile_image_url} />
          <input placeholder='Write a comment' onKeyPress={this.handleKey} className='comment-input'></input>
        </div>
        <ul className='comment-options'>
          <FavoriteIcon />
          <li>
            <div className='repost-icon'/>
            <span>12</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default CommentCreation;
