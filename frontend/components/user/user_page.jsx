import React from 'react';
import Comment from '../comments/comment';
import { values } from 'lodash';
import UserPageBottomContainer from './user_page_bottom_container';
import Dropzone from 'react-dropzone';
var superagent = require('superagent');

const IMAGE_URL = 	'https://api.cloudinary.com/v1_1/winber1/image/upload';
const UPLOAD_PRESET = 'cgbryuxc';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: '',
      headerImage: ''
    }
    this.uploadProfile = this.uploadProfile.bind(this);
    this.uploadHeader = this.uploadHeader.bind(this);
  }

  uploadProfile(files) {
    let profile = files[0];
    let upload = this;

    let image = new FormData();
    image.append('file', profile);
    image.append('upload_preset', UPLOAD_PRESET);

    superagent.post(IMAGE_URL)
      .send(image)
      .end(function(err, res) {
        if (res.body.secure_url !== '') {
          upload.props.editUser({
            profile_image_url: res.body.secure_url,
            id: upload.props.user.id
          });
        }
      });
  }

  uploadHeader(files) {
    let header = files[0];
    let upload = this;

    let image = new FormData();
    image.append('file', header);
    image.append('upload_preset', UPLOAD_PRESET);

    superagent.post(IMAGE_URL)
      .send(image)
      .end(function(err, res) {
        if (res.body.secure_url !== '') {
          upload.props.editUser({
            header_image_url: res.body.secure_url,
            id: upload.props.user.id
          });
        }
      });
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
              <Dropzone className='dropzone' onDrop={this.uploadProfile}>
                <span>Upload image</span>
              </Dropzone>
            </div>
          </div>
          <ul className='user-page-info'>
            <li>
              <span>{user.username}</span>
            </li>
            <Dropzone className='dropzone' onDrop={this.uploadHeader}>
              <span>Upload header image</span>
            </Dropzone>
          </ul>
        </section>
        <UserPageBottomContainer currentUser={this.props.currentUser} />
      </main>
    );
  }
}

export default UserPage;
