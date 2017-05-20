import React from 'react';
import Comment from '../comments/comment';
import { values } from 'lodash';
import SongPlayButtonContainer from '../song/song_play_button_container';
import CommentCreationContainer from '../comments/comment_creation_container';

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
                <li><SongPlayButtonContainer song={this.props.song} /></li>
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
          <ul className='song-page-bottom-main'>
            <CommentCreationContainer song={this.props.song} />
            <ul className='song-page-bottom-info'>
              <ul className='artist-info'>
                <li><img src={song.user.profile_image_url} /></li>
                <li><p>{song.user.username}</p></li>
                <li><p>Follow</p></li>
              </ul>
              <ul className='comments'>
                <li className='song-description'>
                  <p>{song.description}</p>
                </li>
                <li className='song-comments'>
                  <img src='http://res.cloudinary.com/winber1/image/upload/v1495075515/comment_lqle6o.png'/>
                  <span>12 comments</span>
                </li>
                {comments}
              </ul>
            </ul>
          </ul>
          <ul className='song-page-bottom-side'>
            <li>

            </li>
            <li>

            </li>
          </ul>
        </section>
      </main>
    );
  }
}

export default SongPage;
