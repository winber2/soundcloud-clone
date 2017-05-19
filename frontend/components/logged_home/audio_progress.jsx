import React from 'react';

class AudioProgress extends React.Component {
  constructor(props) {
    super(props);
  }

  init() {
    canvas = document.getElementById('progress');
    img = new Image();
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        slider = document.getElementById('slider');

        img.onload = drawImage;

        img.src = 'progress-tiles.jpg';

    } else {
        alert("Canvas not supported!");
    }
  }

  render() {
    retrn (
      <div className="bar-bg">
        <canvas ref='canvas' className="progress"></canvas>
      </div>
    );
  }
}
