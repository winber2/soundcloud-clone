import React from 'react';
import Dropzone from 'react-dropzone';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      album: '',
      genre: '',
      description: '',
      release_date: '',
      author_id: this.props.currentUser.id,
      image_url: '',
      track_url: this.props.trackUrl
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  update(prop) {
    return e => this.setState({ [prop]: e.target.value})
  }

  uploadImage(files) {
    this.setState({ image_url: files[0].preview });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.release_date = new Date(this.state.release_date);
    this.props.createSong(this.state);
  }

  render() {
    return (
      <ul className='upload-song'>
        <h1>Song info</h1>
        <ul className='upload-song-description'>
          <li className='upload-image-box'>
            <img src={this.state.image_url} />
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
          <button className='login'>Cancel</button>
          <button onClick={this.handleSubmit} className='signup'>Save</button>
        </div>
      </ul>
    );
  }
}

export default UploadForm;
