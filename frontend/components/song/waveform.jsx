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
    return (
      <li className='waveform-box'>
        <div ref='waveform' id='waveform'>
        </div>
      </li>
    );
  }
}

export default Waveform;



<div className='waveform-box'>
  <Wavesurfer ref='wavesurfer'
    audioFile={trackUrl}
    pos={this.state.pos}
    options={style}
    mute={this.mute}
    playPause={this.playPause}
    onPosChange={this.handlePosChange}
    playing={this.state.playing}
    />
</div>
