import React from 'react';
import { values } from 'lodash';
import Navigation from './navigation';
import ProgressBar from './progress_bar.jsx';
import Stream from './stream';

class LoggedHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    return (
      <div className='loggedhome'>
        <header className='loggedhome-header'>
          <Navigation logout={this.props.logout} currentUser={this.props.currentUser}/>
        </header>

        <div className='nav-space' />

        <Stream songs={this.props.songs} />
        <ProgressBar />
      </div>
    );
  }
}

export default LoggedHome;
