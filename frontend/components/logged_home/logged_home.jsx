import React from 'react';
import { values } from 'lodash';
import { Route, Switch } from 'react-router-dom';
import Navigation from './navigation';
import ProgressBarContainer from './progress_bar_container';
import Stream from './stream';
import SongPageContainer from '../song_page/song_page_container';
import Upload from '../song/upload';
import SongEditFormContainer from '../song/song_edit_form_container';

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
          <Route exact path="/upload" render={(props) => <Upload {...props} /> } />
          <Route path="/:username/songs/:songId/edit" render={(props) => <SongEditFormContainer {...props} /> } />
          <Route path="/:username/songs/:songId" render={(props) => <SongPageContainer receiveAudio={this.props.receiveAudio} songs={this.props.songs} {...props} /> } />
        </Switch>

        <ProgressBarContainer />
      </div>
    );
  }
}

export default LoggedHome;
