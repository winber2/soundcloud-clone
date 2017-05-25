import React from 'react';
import { values } from 'lodash';
import { Route, Switch } from 'react-router-dom';
import Navigation from './navigation';
import ProgressBarContainer from './progress_bar_container';
import StreamContainer from './stream_container';
import SongPageContainer from '../song_page/song_page_container';
import Upload from '../song/upload';
import SongEditFormContainer from '../song/song_edit_form_container';
import UserPageContainer from '../user/user_page_container';
import UserEditFormContainer from '../user/user_edit_form_container';
import SearchContainer from '../search/search_container';
import CollectionContainer from '../collection/collection_container';

class LoggedHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='loggedhome'>
        <header className='loggedhome-header'>
          <Navigation logout={this.props.logout} currentUser={this.props.currentUser}/>
        </header>

        <div className='nav-space' />

        <Switch>
          <Route exact path="/stream" render={(props) => <StreamContainer {...props} /> } />
          <Route exact path="/upload" render={(props) => <Upload {...props} /> } />
          <Route path="/search" render={(props) => <SearchContainer {...props} /> } />
          <Route path="/collection" render={(props) => <CollectionContainer {...props} /> } />
          <Route path="/:username/songs/:songId/edit" render={(props) => <SongEditFormContainer {...props} /> } />
          <Route path="/:username/songs/:songId" render={(props) => <SongPageContainer receiveAudio={this.props.receiveAudio} songs={this.props.songs} {...props} /> } />
          <Route path="/:username/edit" render={(props) => <UserEditFormContainer {...props} /> } />
          <Route path="/:username" render={(props) => <UserPageContainer {...props} /> } />
        </Switch>

        <ProgressBarContainer />
      </div>
    );
  }
}

export default LoggedHome;
