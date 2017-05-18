import React from 'react';

class CommentCreation extends React.Component {
  constructor(props) {
    super(props);
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
        <input onKeyPress={this.handleKey} className='comment-input'></input>
      </div>
    );
  }
}

export default CommentCreation;
