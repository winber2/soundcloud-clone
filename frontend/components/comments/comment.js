import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
    this.showUser = this.showUser.bind(this);
  }

  showUser() {
    window.location.hash = `/${this.props.comment.user.username}`;
  }

  deleteComment(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment);
  }

  render() {
    let comment = this.props.comment || { user: {} };
    return (
      <li className='single-comment'>
          <img onClick={this.showUser} src={comment.user.profile_image_url} />
          <ul>
            <li className='comment-user'>
              <p onClick={this.showUser} >{comment.user.username}</p>
              <p>{comment.created_at}</p>
            </li>
            <li>{comment.body}</li>
          </ul>
          <button onClick={this.deleteComment}>Delete</button>
      </li>
    );
  }
}

export default Comment;
