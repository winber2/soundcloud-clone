import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
  }

  static togglePlay() {
    this.togglePlay();
  }

  togglePlay() {
    let $img = $('img.play-pause');
    let attr = $img.attr('src');
    let $audio = $('audio.player');

    if (attr === 'assets/play-button.png') {
      $img.attr('src', 'assets/pause-button.png');
      $audio[0].play();
    } else {
      $img.attr('src', 'assets/play-button.png');
      $audio[0].pause();
    }
  }

  render() {
    return (
      <footer id="music-player">
        <div className="inner">
          <audio className="player" src={this.props.audio.track_url} autoPlay/>

          <div className="controls">
            <img className="previous" src="assets/back-button.png"></img>
            <img onClick={this.togglePlay} className="play-pause" src="assets/play-button.png"></img>
            <img className="next" src="assets/skip-button.png"></img>
          </div>

          <div className="play-bar">
            <span id="time">0:00</span>
              <div className="bar-box">
                <div className="bar-bg">
                  <div className="progress"></div>
                </div>
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
      </footer>
    );
  }
}

export default ProgressBar;
