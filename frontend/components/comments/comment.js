import React from 'react';
import moment from 'moment';

window.moment = moment;

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
    this.deleteComment = this.deleteComment.bind(this);
    this.showUser = this.showUser.bind(this);
    this.enableEdit = this.enableEdit.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  componentWillUnmount() {
    this.setState({ isEditing: false });
  }

  showUser() {
    window.location.hash = `/${this.props.comment.user.username}`;
  }

  deleteComment(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment);
  }

  enableEdit() {
    this.setState({ isEditing: true });
  }

  handleKey(e) {
    if (e.key === 'Enter' && e.target.value !== '') {
      let comment = {
        body: e.target.value,
        song_id: this.props.comment.song_id,
        id: this.props.comment.id
      };
      this.props.editComment(comment);
      this.setState({ isEditing: false });
    }
  }

  render() {
    let comment = this.props.comment || { user: {} };
    let body = <li>{comment.body}</li>;
    let edit = '';
    let del = '';
    if (this.state.isEditing) {
      body = <input onKeyPress={this.handleKey} defaultValue={comment.body}></input>
    } else if (comment.user.id === this.props.currentUser.id) {
      edit = <button onClick={this.enableEdit}>Edit</button>;
      del = <button onClick={this.deleteComment}>Delete</button>;
    }
    return (
      <li className='single-comment'>
          <img onClick={this.showUser} src={comment.user.profile_image_url} />
          <ul className='comment-body'>
            <li className='comment-user'>
              <p onClick={this.showUser} >{comment.user.username}</p>
            </li>
            {body}
          </ul>
          <ul>
            <p>{moment(comment.created_at).fromNow()}</p>
            {edit}
            {del}
          </ul>
      </li>
    );
  }
}

export default Comment;
