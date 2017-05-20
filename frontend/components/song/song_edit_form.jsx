import React from 'react';
import Dropzone from 'react-dropzone';
var superagent = require('superagent');

const IMAGE_URL = 	'https://api.cloudinary.com/v1_1/winber1/image/upload';
const UPLOAD_PRESET = 'cgbryuxc';

class SongEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      album: '',
      genre: '',
      description: '',
      release_date: '',
      author_id: '',
      image_url: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  componentDidMount() {
    this.setState({
      title: song.title,
      album: song.album,
      genre: song.genre,
      description: song.description,
      release_date: song.release_date,
      author_id: song.user.id,
      image_url: song.image_url,
    })
  }

  toHome() {
    this.props.history.push('/stream');
  }

  update(prop) {
    return e => this.setState({ [prop]: e.target.value})
  }

  uploadImage(files) {
    this.setState({ image_url: files[0] });
  }

  handleSubmit(e) {
    e.preventDefault();

    let upload = this;
    let image = new FormData();
    image.append('file', imageFile);
    image.append('upload_preset', UPLOAD_PRESET)

    superagent.post(IMAGE_URL)
      .send(image)
      .end(function(err, res) {
        if (res.body.secure_url !== '') {
          upload.state.image_url = res.body.secure_url;
        }

        upload.props.editSong(upload.state).then(upload.props.history.push('/stream'));
      });
  }

  render() {
    return (
      <ul className={`upload-song ${this.state.isActive}`} ref='uploadSong'>
        <h1>Song info</h1>
        <ul className='upload-song-description'>
          <li className='upload-image-box'>
            <img src={this.state.image_url.preview} />
            <Dropzone onDrop={this.uploadImage} className='dropzone'>
              <button className='upload-image'>Upload Image</button>
            </Dropzone>
          </li>
          <ul className='upload-song-info'>
              Title
              <input onChange={this.update('title')}></input>
              Album
              <input onChange={this.update('album')}></input>
              <ul className='upload-song-detail'>
            <li>
              Genre
              <input onChange={this.update('genre')}></input>
            </li>
            <li>
              Release Date
              <input onChange={this.update('release_date')} type='date'></input>
            </li>
          </ul>
          Description
          <textarea rows='6' onChange={this.update('description')}></textarea>
          </ul>
        </ul>
        <div className='upload-buttons'>
          <button onClick={this.toHome} className='login'>Cancel</button>
          <button onClick={this.handleSubmit} className='signup'>Save</button>
        </div>
      </ul>
    );
  }
}

export default SongEditForm;
