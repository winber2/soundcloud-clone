import React from 'react';
import Dropzone from 'react-dropzone';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { route: 'upload' };
    this.toHome = this.toHome.bind(this);
    this.acceptFile = this.acceptFile.bind(this);
  }

  toHome() {
    window.location.hash = '/stream';
  }

  acceptFile(files) {
    debugger;
  }

  selectRoute() {
    if (this.state.route === 'upload') {
      return (
        <div className='upload-box'>
          <ul>
            <h1>Upload to Vibe</h1>
          </ul>
          <ul>
            <Dropzone className='dropzone' onDrop={this.acceptFile}>
              <button className='signup'>Choose a file to upload</button>
            </Dropzone>
            <button onClick={this.toHome} className='login'>Back to home page</button>
          </ul>
        </div>
      )
    } else {

    }
  }

  render() {
    let route = this.selectRoute();
    return (
      <section className='upload-main'>
        <div className='upload-info' />
          {route}
      </section>
    );
  }
}

export default Upload;
