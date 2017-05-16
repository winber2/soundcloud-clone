import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="music-player">
        <div className="inner">

          <div className="controls">
            <a className="previous"></a>
            <a className="play"></a>
            <a className="pause"></a>
            <a className="next"></a>
          </div>

          <div className="play-bar">
            <span id="time">0:00</span>
              <div className="bar-bg">
                <div className="progress"></div>
              </div>
            <span id="total-time">0:00</span>
          </div>

         <div className="song-content">

            <div className="user-info">

              <div className="img-wrapper">
                <a className='user-info' />
              </div>

              <div className="song-info">
                <span className="artist">Artist Name</span>
                <span className="song">Song Name</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
