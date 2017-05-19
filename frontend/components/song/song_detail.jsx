import React from 'react';

class SongDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="song-detail">
        <ul>
            <li>
              <div className='heart-icon'/>
              <span>5</span>
            </li>
            <li>
              <div className='repost-icon'/>
              <span>12</span>
            </li>
            <li>
              <div className='ellipses-icon'/>
              <span className='song-options'>More</span>
            </li>
        </ul>
        <ul>
            <li>
              <div className='comment-icon'/>
              <span>{this.props.comments}</span>
            </li>
        </ul>
      </li>
    );
  }
}

export default SongDetail;
