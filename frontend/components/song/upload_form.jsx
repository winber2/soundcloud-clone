import React from 'react';
import Dropzone from 'react-dropzone';
import Modal from 'react-modal';

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
      image_file: null,
      image_url: null,
      track_file: this.props.trackFile,
      isActive: '',
      errors: '',
      modalState: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount() {
    if (this.state.isActive === '') {
      this.setState({ isActive: 'active' });
    }
  }

  update(prop) {
    return e => this.setState({ [prop]: e.target.value});
  }

  uploadImage(files) {
    let file = files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ image_file: file, image_url: fileReader.result});
    };

    fileReader.readAsDataURL(file);
  }

  disableForm() {
    this.setState({ modalState: true });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.title === '' || this.state.genre === '') {
      this.setState({ errors: 'Please fill the starred information'});
      return;
    } else if (this.state.image_url === '') {
      this.setState({ errors: 'Image cannot be blank' });
      return;
    }

    this.disableForm();

    let imageFile = this.state.image_file;
    let songFile = this.state.track_file;
    let upload = this;
    this.state.release_date = new Date(this.state.release_date);

    let song = new FormData();
    song.append("song[image_url]", imageFile);
    song.append("song[track_url]", songFile);
    song.append("song[title]", this.state.title);
    song.append("song[album]", this.state.album);
    song.append("song[genre]", this.state.genre);
    song.append("song[description]", this.state.description);
    song.append("song[release_date]", this.state.release_date);
    song.append("song[author_id]", this.state.author_id);

    this.props.createSong(song)
    .then(action => upload.props.history.push(
      `/${action.song.user.username}/songs/${action.song.id}`
    ));
  }

  render() {
    return (
      <ul className={`upload-song ${this.state.isActive}`}>
        <Modal contentLabel='Modal'
          isOpen={this.state.modalState}
          className='upload-modal'>
          <div className='loader'></div>
          <div>Uploading Song</div>
        </Modal>
        <h1>Song info</h1>
        <ul className='upload-song-description'>
          <li className='upload-image-box'>
            <img src={this.state.image_url} />
            <Dropzone onDrop={this.uploadImage} className='dropzone'>
              <button className='upload-image'>Upload Image</button>
            </Dropzone>
          </li>
          <ul className='upload-song-info'>
            <ul>
              <li>Title*</li>
              <li className='upload-errors'>{this.state.errors}</li>
            </ul>
            <input onChange={this.update('title')}></input>
            Album
            <input onChange={this.update('album')}></input>
            <ul className='upload-song-detail'>
            <li>
              Genre*
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
          <button onClick={this.props.back} className='login'>Cancel</button>
          <button onClick={this.handleSubmit} className='signup'>Save</button>
        </div>
      </ul>
    );
  }
}

export default UploadForm;
