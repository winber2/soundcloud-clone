import React from 'react';
import SongPlay from './song_play';
import SongDetailContainer from './song_detail_container';
import Wavesurfer from 'react-wavesurfer';

const style = {
  maxCanvasWidth: 500,
  waveColor: 'gray',
  progressColor: 'orange',
  barWidth: 3,
  minPxPerSec: 5,
  hideScrollbar: true,
  height: 66,
  pixelRatio: 1
};

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pos: 0, playing: false }
    this.showSong = this.showSong.bind(this);
    this.handleTogglePlay = this.handleTogglePlay.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
  }

  componentWillReceiveProps() {
    if (this.props.audio.isPlaying) {
      this.handleTogglePlay();
    }
  }

  showSong() {
    let song = this.props.song;
    let user = song.user.username;
    window.location.hash = `/${user}/songs/${song.id}`;
  }

  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    });
  }

  handlePosChange(e) {
    this.setState({
      pos: e.originalArgs[0]
    });
  }

  render() {
    let song = this.props.song;
    let trackUrl = song.track_url || '';
    return (
      <li className='song-container'>
        <img onClick={this.showSong} src={song.image_url}></img>
        <ul className='song-info'>
          <SongPlay song={song} showSong={this.showSong}/>
          <Wavesurfer
            audioFile={trackUrl}
            pos={this.state.pos}
            options={style}
            onPosChange={this.handlePosChange}
            playing={this.state.playing}
            />
          <SongDetailContainer song={song} comments={song.number_of_comments} />
        </ul>
      </li>
    );
  }
}

export default Song;
