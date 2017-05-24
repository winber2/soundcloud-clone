import React from 'react';
import Comment from '../comments/comment';
import { values } from 'lodash';
import SongPlayButtonContainer from '../song/song_play_button_container';
import SideBarContainer from '../sidebar/sidebar_container';
import SongPageBottomContainer from './song_page_bottom_container';

class SongPage extends React.Component {
  constructor(props) {
    super(props);
    this.showUser = this.showUser.bind(this);
  }

  showUser() {
    window.location.hash = `/${this.props.song.user.username}`;
  }

  componentWillReceiveProps() {
    window.scrollTo(0, 0)
  }

  componentDidMount() {
    let songId = this.props.match.params.songId;
    this.props.fetchSingleSong(songId);
    this.props.fetchComments(songId);
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
              <span>waveform</span>
            </li>
            <li className='song-page-image'>
              <img src={song.image_url} />
            </li>
          </ul>
        </section>
        <section className='song-page-bottom'>
          <SongPageBottomContainer song={song} />
          <SideBarContainer />
        </section>
      </main>
    );
  }
}

export default SongPage;
