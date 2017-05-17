import React from 'react';
import { values } from 'lodash';
import { Route, Switch } from 'react-router-dom';
import Navigation from './navigation';
import ProgressBar from './progress_bar.jsx';
import Stream from './stream';
import SongPageContainer from '../song_page/song_page_container';

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
        <Switch>
          <Route exact path="/stream" render={(props) => <Stream songs={this.props.songs} {...props} /> } />
          <Route path="/:username/songs/:songId" render={(props) => <SongPageContainer songs={this.props.songs} {...props} /> } />
        </Switch>
        <ProgressBar />
      </div>
    );
  }
}

export default LoggedHome;
