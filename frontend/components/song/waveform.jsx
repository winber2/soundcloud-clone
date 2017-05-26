import React from 'react';

class Waveform extends React.Component {
  constructor(props) {
    super(props);
    this.state = { wavesurfer: undefined };
  }

  componentDidMount() {
    var wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'gray',
      progressColor: 'orange',
      maxCanvasWidth: 500
    });
    this.setState({ wavesurfer: wavesurfer });
  }


  render() {
    if (this.props.song.track_url !== undefined &&
      this.state.wavesurfer !== undefined &&
      Boolean(this.refs.waveform)) {
      this.state.wavesurfer.load('https://res.cloudinary.com/winber1/video/upload/v1495513521/ONE_OK_ROCK_-_The_Beginning_ihy7xf.mp3');
    }

    return (
      <li className='waveform-box'>
        <div ref='waveform' id='waveform'>
        </div>
      </li>
    );
  }
}

export default Waveform;
