import React from 'react';

class SongPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    let song = this.props.song;
    return (
      <main className='song-page'>
        <section className='song-content'>
          <ul>
            <li className='song-page-info'>
              <ul className='song-header'>
                <li><img src="assets/play-icon.png" /></li>
                <li>
                  <ul className='song-title'>
                    <li>
                      <span>{song.user.username}</span>
                    </li>
                    <li>
                      <span>{song.title}</span>
                    </li>
                  </ul>
                </li>
              </ul>
              <span>waveform</span>
            </li>
            <li className='song-page-image'>
              <img src={song.image_url} />
            </li>
          </ul>

        </section>
      </main>
    );
  }
}

export default SongPage;
