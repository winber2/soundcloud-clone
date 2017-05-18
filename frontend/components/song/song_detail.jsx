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
              <img src="http://res.cloudinary.com/winber1/image/upload/v1495075515/heart_zzt9wm.png" />
            </li>
            <li>
              <img src="http://res.cloudinary.com/winber1/image/upload/v1495075515/repost_yyafrh.png" />
            </li>
        </ul>
        <ul>
            <li>
              <img src="http://res.cloudinary.com/winber1/image/upload/v1495075515/comment_lqle6o.png" />
              <span>17</span>
            </li>
        </ul>
      </li>
    );
  }
}

export default SongDetail;
