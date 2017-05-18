import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let comment = this.props.comment || { user: {} };
    return (
      <li>
        <img src={comment.user.profile_image_url} />
        <ul>
          <li className='comment-user'>
            <p>{comment.user.username}</p>
            <p>{comment.created_at}</p>
          </li>
          <li>{comment.body}</li>
        </ul>
      </li>
    );
  }
}

export default Comment;
