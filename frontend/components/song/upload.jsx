import React from 'react';
import Dropzone from 'react-dropzone';
import UploadFormContainer from './upload_form_container';
var superagent = require('superagent');

const VIDEO_URL = 'https://api.cloudinary.com/v1_1/winber1/video/upload';
const UPLOAD_PRESET = 'cgbryuxc';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { route: 'upload', isActive: '', trackUrl: '' };
    this.toHome = this.toHome.bind(this);
    this.acceptFile = this.acceptFile.bind(this);
    this.back = this.back.bind(this);
  }

  toHome() {
    this.props.history.push('/stream');
  }

  acceptFile(files) {
    if (files[0].type !== 'audio/mp3') {
      alert('Sorry, we currently only accept mp3 files as audio files!');
    } else {
      this.setState({ isActive: 'active', route: 'input', trackUrl: files[0] });
    }
  }

  back() {
    this.setState({ route: 'upload', isActive: '' });
  }

  selectRoute() {
    if (this.state.route === 'upload') {
      return (
        <ul className='dropzone'>
          <Dropzone className='reset' onDrop={this.acceptFile}>
            <button className='signup'>Choose a file to upload</button>
          </Dropzone>
          <button onClick={this.toHome} className='login'>Back to home page</button>
        </ul>
      )
    } else {
      return (
        <UploadFormContainer back={this.back} trackUrl={this.state.trackUrl}/>
      )
    }
  }

  render() {
    let route = this.selectRoute();
    return (
      <section className='upload-main'>
        <div className='upload-info' />
          <div className={`upload-box ${this.state.isActive}`}>
            <ul>
              <h1>Upload to Vibe</h1>
            </ul>
            {route}
          </div>
      </section>
    );
  }
}

export default Upload;
