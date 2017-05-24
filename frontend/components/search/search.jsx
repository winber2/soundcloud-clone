import React from 'react';

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
    return (
      <div className='search-page'>
        <h1>Search results for {`"${this.props.location.search.slice(3)}"`}</h1>
        <ul className='search-results'>

        </ul>
      </div>
    );
  }
}

export default Search;
