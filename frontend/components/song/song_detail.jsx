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
              <img src="assets/heart.png" />
            </li>
            <li>
              <img src="assets/repost.png" />
            </li>
        </ul>
        <ul>
            <li>
              <img src="assets/comment.png" />
              <span>17</span>
            </li>
        </ul>
      </li>
    );
  }
}

export default SongDetail;
