import React from 'react';
import UserShow from '../user/user_show';
import SongShow from '../song/song_show';
import { values } from 'lodash';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let query = this.props.location.search.slice(3);
    this.props.fetchUsers(query);
    this.props.fetchSongs(query);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      this.props.fetchUsers(query);
      this.props.fetchSongs(query);
    }
  }

  render() {
    debugger;
    let users = values(this.props.search.users).map( user => (
      <UserShow user={user} key={user.id} />
    ))
    let songs = values(this.props.search.songs).map( song => (
      <SongShow song={song} key={song.id} />
    ))
    return (
      <div className='search-page'>
        <h1>Search results for {`"${this.props.location.search.slice(3)}"`}</h1>
        <ul className='search-results'>
          {songs}
          {users}
        </ul>
      </div>
    );
  }
}

export default Search;
