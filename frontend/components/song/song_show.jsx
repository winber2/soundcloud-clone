import React from 'react';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
    this.showSong = this.showSong.bind(this);
    this.showUser = this.showUser.bind(this);
  }

  showSong() {
    let object = {}
    object.preventDefault = function() {};
    if (this.props.home) {
      this.props.openSignIn(object);
    } else {
      window.location.hash = `/${this.props.song.user.username}/songs/${this.props.song.id}`;
    }
  }

  showUser() {
    let object = {}
    object.preventDefault = function() {};
    if (this.props.home) {
      this.props.openSignIn(object);
    } else {
      window.location.hash = `/${this.props.song.user.usename}`;
    }
  }

  render() {
    return (
      <li className='song-show'>
        <img onClick={this.showSong} src={this.props.song.image_url} />
        <span onClick={this.showSong}>{this.props.song.title}</span>
        <p onClick={this.showUser}>{this.props.song.user.username}</p>
      </li>
    );
  }
}

export default SongShow;
