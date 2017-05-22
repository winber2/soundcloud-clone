import React from 'react';
import Dropzone from 'react-dropzone';
var superagent = require('superagent');

const IMAGE_URL = 	'https://api.cloudinary.com/v1_1/winber1/image/upload';
const UPLOAD_PRESET = 'cgbryuxc';

class UserEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      description: '',
      profile_image_url: { preview: '' },
      header_image_url: { preview: '' }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.uploadHeader = this.uploadHeader.bind(this);
    this.toUserPage = this.toUserPage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let user = nextProps.user;
    if (user.id !== undefined) {
      this.setState({
        id: user.id,
        description: user.description,
        profile_image_url: { preview: user.profile_image_url },
        header_image_url: { preview: user.header_image_url }
      })
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.username);
  }

  toUserPage() {
    this.props.history.push(`/${this.props.match.params.username}`);
  }

  update(prop) {
    return e => this.setState({ [prop]: e.target.value})
  }

  uploadHeader(files) {
    this.setState({ header_image_url: files[0] });
  }

  uploadImage(files) {
    this.setState({ profile_image_url: files[0] });
  }

  handleSubmit(e) {
    e.preventDefault();
    let profile = this.state.profile_image_url;
    let header = this.state.header_image_url;
    let upload = this;

    if (header.preview !== this.props.user.header_image_url) {
      let image = new FormData();
      image.append('file', header);
      image.append('upload_preset', UPLOAD_PRESET);

      superagent.post(IMAGE_URL)
        .send(image)
        .end(function(err, res) {
          if (res.body.secure_url !== '') {
            upload.state.header_image_url = res.body.secure_url;
          }
          upload.state.profile_image_url = upload.state.profile_image_url.preview;
          upload.props.editUser(upload.state)
            .then(upload.props.history.push(`/${upload.props.user.username}`));
        });
    }

    if (profile.preview !== this.props.user.profile_image_url) {
      let image = new FormData();
      image.append('file', profile);
      image.append('upload_preset', UPLOAD_PRESET);

      superagent.post(IMAGE_URL)
        .send(image)
        .end(function(err, res) {
          if (res.body.secure_url !== '') {
            upload.state.profie_image_url = res.body.secure_url;
          }
          upload.state.header_image_url = upload.state.header_image_url.preview;
          upload.props.editUser(upload.state)
            .then(upload.props.history.push(`/${upload.props.user.username}`));
        });
    }

    if (profile.preview === this.props.user.profile_image_url &&
    header.preview === this.props.user.header_image_url) {
      upload.props.editUser(this.state)
        .then(upload.props.history.push(`/${upload.props.user.username}`));
    }
  }

  render() {
    return (
      <section className='upload-main'>
        <div className='upload-info' />
        <div className='upload-box active user-edit'>
          <ul>
            <h1>User Info</h1>
          </ul>
          <ul className='upload-song active'>
            <div className='header-image'>
              <img src={this.state.header_image_url.preview} />
              <Dropzone onDrop={this.uploadHeader} className='dropzone'>
                <button className='upload-header user-edit'>Upload Image</button>
              </Dropzone>
            </div>
            <ul className='upload-song-description'>
              <li className='profile-image'>
                <img src={this.state.profile_image_url.preview} />
                <Dropzone onDrop={this.uploadImage} className='dropzone'>
                  <button className='upload-image'>Upload Image</button>
                </Dropzone>
              </li>
              <ul className='upload-song-info'>
              Profile Description
              <textarea rows='11' onChange={this.update('description')} value={this.state.description}></textarea>
              </ul>
            </ul>
            <div className='upload-buttons'>
              <button onClick={this.toUserPage} className='login'>Cancel</button>
              <button onClick={this.handleSubmit} className='signup'>Save</button>
            </div>
          </ul>
        </div>
      </section>
    );
  }
}

export default UserEditForm;
