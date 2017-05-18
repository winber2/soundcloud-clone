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
    this.setState({ route: 'input' })
  }

  selectRoute() {
    if (this.state.route === '') {
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
        <ul className='upload-song'>
          <h1>Song info</h1>
          <ul className='upload-song-description'>
            <li className='upload-image-box'>
              <div id='upload-image-icon' />
              <button className='upload-image'>Upload Image</button>
            </li>
            <ul className='upload-song-info'>
              Title
              <input></input>
              Album <input></input>
              <ul className='upload-song-detail'>
                <li>
                  Genre
                  <input></input>
                </li>
                <li>
                  Release Date
                  <input type='date' className='date'></input>
                </li>
              </ul>
              Description
              <textarea rows='6'></textarea>
            </ul>
          </ul>
          <div className='upload-buttons'>
            <button className='login'>Cancel</button>
            <button className='signup'>Save</button>
          </div>
        </ul>
      )
    }
  }

  render() {
    let route = this.selectRoute();
    return (
      <section className='upload-main'>
        <div className='upload-info' />
          <div className='upload-box active'>
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
