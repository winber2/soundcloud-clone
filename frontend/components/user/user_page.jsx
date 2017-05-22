import React from 'react';
import Comment from '../comments/comment';
import { values } from 'lodash';
import UserPageBottomContainer from './user_page_bottom_container';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: '',
      headerImage: ''
    }
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
          <img src={this.props.user.header_image_url} />
          <div className='user-avatar-box'>
            <div className='user-avatar' >
              <img src={this.props.user.profile_image_url} />
              <span>Upload image</span>
            </div>
          </div>
          <ul className='user-page-info'>
            <li>
              <span>{user.username}</span>
            </li>
            <span>Upload header image</span>
          </ul>
        </section>
        <UserPageBottomContainer />
      </main>
    );
  }
}

export default UserPage;
