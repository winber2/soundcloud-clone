import React from 'react';
import Comment from '../comments/comment';
import { values } from 'lodash';

window.values = values;

class SongPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let songId = this.props.match.params.songId;
    this.props.fetchSingleSong(songId);
    this.props.fetchComments(songId);
  }

  render() {
    let song = this.props.song || { user: { username: '' }, title: '', image_url: '' };
    let comments;
    if (this.props.comments !== {} ) {
      comments = values(this.props.comments).map( (comment) => (
        <Comment comment={comment} key={comment.id} />
      ));
    }
    return (
      <main className='song-page'>
        <section className='song-content'>
          <ul>
            <li className='song-page-info'>
              <ul className='song-header'>
                <li><div className='play-image'></div></li>
                <li>
                  <ul className='song-title'>
                    <li>
                      <span>{song.user.username}</span>
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
          <ul className='comments'>
            {comments}
          </ul>
        </section>
      </main>
    );
  }
}

export default SongPage;
