import React from 'react';
import Comment from '../comments/comment';
import { values } from 'lodash';
import SongPlayButtonContainer from '../song/song_play_button_container';
import SideBarContainer from '../sidebar/sidebar_container';
import SongPageBottomContainer from './song_page_bottom_container';
var WaveformData = require('waveform-data');

class SongPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { wavesurfer: undefined, player: undefined };
    this.showUser = this.showUser.bind(this);
  }

  showUser() {
    window.location.hash = `/${this.props.song.user.username}`;
  }

  componentWillReceiveProps(nextProps) {
    let nextAudio = nextProps.audio;
    let audio = this.props.audio;

    if (this.state.wavesurfer === undefined) return;

    if (audio.isPlaying === false ) {
      this.state.wavesurfer.pause();
    // } else if (nextAudio.song.id !== this.props.song.id &&
    // audio.song.id !== undefined) {
    //   let duration = audio.player.duration || 0;
    //   this.state.wavesurfer.play(audio.player.currentTime * duration);
    } else if (audio.song.id === this.props.song.id &&
    audio.song.id !== undefined) {
      this.state.wavesurfer.play(this.props.audio.player.currentTime);
    } else if (audio.song.id !== this.props.song.id &&
    audio.song.id !== undefined) {
      this.state.wavesurfer.pause();
    }
  }

  componentWillReceiveProps(nextProps) {
    let song = this.props.song || {};
    if (nextProps.match.params.songId != song.id) {
      window.scrollTo(0, 0);
    }

    if (song.id === undefined || this.props.audio === undefined) return;

    let nextAudio = nextProps.audio;
    let audio = this.props.audio;

    if (this.state.wavesurfer === undefined) return;

    if (audio.isPlaying === false ) {
      this.state.wavesurfer.pause();
    } else if (audio.song.id === song.id &&
    audio.song.id !== undefined) {
      this.state.wavesurfer.play(this.props.audio.player.currentTime);
    } else if (audio.song.id !== song.id &&
    audio.song.id !== undefined) {
      this.state.wavesurfer.pause();
    }
  }

  componentDidMount() {
    let songId = this.props.match.params.songId;
    let songPage = this;
    this.props.fetchComments(songId);
    this.props.fetchSingleSong(songId).then(() => {
      let style = {
        container: `#song-waveform`,
        maxCanvasWidth: 650,
        waveColor: 'gray',
        progressColor: 'orangered',
        barWidth: 2,
        barHeight: 0.95,
        minPxPerSec: 50,
        hideScrollbar: true,
        height: 80,
        pixelRatio: 1,
        backend: 'MediaElement',
        cursorWidth: 0
      };

      var wavesurfer = WaveSurfer.create(style);
      wavesurfer.load(this.props.song.track_url, [
        0.0218, 0.038, 0.084, 0.082, 0.091, 0.222, 0.3313,
        0.25, 0.3542, 0.4538, 0.2358, 0.3195, 0.3591,
        0.3599, 0.542, 0.7447, 0.6328, 0.8278, 0.6288,
        0.5645, 0.3218, 0.3005, 0.6828, 0.5051, 0.5664,
        0.5181, 0.5621, 0.5966, 0.689, 0.546, 0.5445, 0.4621,
        0.5618, 0.489, 0.7354, 0.8561, 0.6638, 0.7799, 0.7923,
        0.8659, 0.6675, 0.6268, 0.4984, 0.5997, 0.5248, 0.3495,
        0.4431, 0.5236, 0.4755, 0.3183, 0.3349, 0.4018, 0.5109,
        0.3833, 0.3813, 0.5422, 0.5961, 0.5191, 0.5791, 0.4631,
        0.5315, 0.5157, 0.3166, 0.2108
            ]);
      wavesurfer.setMute(true);
      wavesurfer.on('seek', (int) => this.selectTime(int));
      songPage.setState({
        wavesurfer: wavesurfer,
        player: songPage.props.audio.player
      });
    });
  }

  selectTime(int) {
    let audio = this.props.audio;
    if (this.props.song.id === audio.song.id) {
      let player = this.state.player;
      let time = player.duration * int;
      player.currentTime = time;
      audio.isPlaying = true;
      this.setState({ currentTime: time});
      this.props.receiveAudio(audio);
    } else {
      audio.song = this.props.song;
      audio.isPlaying = true;
      audio.player.currentTime = 0;
      this.props.receiveAudio(audio);
    }
  }

  render() {
    let song = this.props.song || { user: { username: '' }, title: '', image_url: '' };
    return (
      <main className='song-page'>
        <section className='song-content'>
          <ul>
            <li className='song-page-info'>
              <ul className='song-header'>
                <li><SongPlayButtonContainer song={this.props.song} /></li>
                <li>
                  <ul className='song-title'>
                    <li>
                      <span onClick={this.showUser} >{song.user.username}</span>
                    </li>
                    <li>
                      <span>{song.title}</span>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className='song-waveform-box'>
                <div id='song-waveform' />
              </div>
            </li>
            <li className='song-page-image'>
              <img src={song.image_url} />
            </li>
          </ul>
        </section>
        <section className='song-page-bottom'>
          <SongPageBottomContainer song={song} currentUser={this.currentUser} />
          <SideBarContainer />
        </section>
      </main>
    );
  }
}

export default SongPage;
