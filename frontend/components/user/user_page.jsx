import React from 'react';
import Comment from '../comments/comment';
import { values } from 'lodash';
import SongPlayButtonContainer from '../song/song_play_button_container';
import CommentCreationContainer from '../comments/comment_creation_container';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let username = this.props.match.params.username;
    this.props.fetchUser(username);
  }

  render() {
    let user = this.props.user || { user: { username: '' }, title: '', image_url: '' };
    return (
      <main className='user-page'>
        <section className='user-content'>
          <div className='user-avatar-box'>
            <div className='user-avatar' >
              <span>Upload image</span>
            </div>
          </div>
          <ul className='user-page-info'>
            <li>
              <span>user</span>
            </li>
            <span>Upload header image</span>
          </ul>
        </section>
        <section className='user-page-bottom'>
          <div className='user-page-nav'>
            <div className='user-nav-border' />
            <li>Tracks</li>
            <li>Playlists</li>
            <li>Reposts</li>
          </div>
          <ul className='user-page-bottom-content'>
            <ul className='user-page-songs'>
              {user.username}
            </ul>

            <ul className='user-page-bottom-side'>
              <ul className='user-info'>

              </ul>
              <p className='user-description'></p>
              <ul className='user-favorites'>

              </ul>
              <ul className='user-following'>

              </ul>
            </ul>
          </ul>
        </section>
      </main>
    );
  }
}

export default UserPage;