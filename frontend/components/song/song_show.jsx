import React from 'react';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='song-show'>
        <img src={this.props.song.image_url} />
        <span>{this.props.song.title}</span>
        <p>{this.props.song.user.username}</p>
      </li>
    );
  }
}

export default SongShow;
